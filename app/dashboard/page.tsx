'use client';

import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Html5Qrcode } from 'html5-qrcode';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; phone: string; points: number } | null>(null);
  const [showPoints, setShowPoints] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const storedUser = localStorage.getItem('loggedInUser');

    if (!loggedIn || !storedUser) {
      alert('Please log in first.');
      router.push('/login');
      return;
    }

    const userData = JSON.parse(storedUser);
    setUser({
      name: userData.fullName,
      phone: userData.phone,
      points: 12000,
    });
  }, [router]);

  if (!user) return <p className="text-center mt-10">Loading user data...</p>;

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-6 px-4">
        <div className="w-full max-w-sm bg-white rounded-xl shadow p-6 space-y-6">
          {/* Welcome and Info */}
          <img
          src="/logos/stalogo.PNG"
          alt="Standard Logo"
          width={100}
          height={100}
          className="mb-4"
          //align="center"
          style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
        />
          <div>
            <h2 className="text-xl font-bold mb-1">Welcome 👋 </h2>            
            <h2 className="text-xl font-bold mb-1">{user.name} </h2>
            <p className="text-gray-600 mb-4">Phone: {user.phone}</p>
            
            <div className="relative bg-blue-100 p-4 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-sm text-blue-700 font-semibold">Points Balance</h3>
                <p className="text-3xl font-bold text-blue-900">
                  {showPoints ? user.points.toLocaleString() : '•••••'}
                </p>
              </div>
              <button
                onClick={() => setShowPoints((prev) => !prev)}
                className="text-blue-700 hover:text-blue-900"
              >
                {showPoints ? (
                  <EyeSlashIcon className="w-6 h-6" />
                ) : (
                  <EyeIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/profile"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
            >
              View Profile
            </a>
            <button className="bg-yellow-100 text-yellow-700 p-2 rounded-lg shadow hover:bg-yellow-200 transition">
              History
            </button>
            <button className="bg-purple-100 text-purple-700 p-2 rounded-lg shadow hover:bg-purple-200 transition">
              Settings
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('loggedInUser');
                localStorage.removeItem('loggedIn');
                window.location.href = '/';
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Log Out
            </button>
          </div>

          {/* QR Scanner */}
          <QrScannerComponent />
        </div>
      </main>
    </>
  );
}

// === QR SCANNER COMPONENT ===
function QrScannerComponent() {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (showScanner && scannerRef.current) {
      const config = { fps: 10, qrbox: 250 };

      const qrCodeSuccessCallback = (decodedText: string) => {
        setScannedResult(decodedText);
        html5QrCodeRef.current?.stop().then(() => {
          html5QrCodeRef.current?.clear();
        });
      };

      html5QrCodeRef.current = new Html5Qrcode('qr-reader');

      html5QrCodeRef.current
        .start(
          { facingMode: 'environment' },
          config,
          qrCodeSuccessCallback,
          (errorMessage: string) => {
            console.warn('QR Code scan error:', errorMessage);
          }
        )
        .catch((err) => {
          console.error('Camera start error', err);
        });
    }

    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().then(() => {
          html5QrCodeRef.current?.clear();
        });
      }
    };
  }, [showScanner]);

  return (
    <div>
      <button
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition mb-4"
        onClick={() => setShowScanner(true)}
      >
        Scan QR Code
      </button>

      {showScanner && (
        <div className="mb-4">
          <div ref={scannerRef} id="qr-reader" className="w-full" />
          <p className="text-sm text-gray-600 text-center mt-2">
            Point your camera at a QR code
          </p>
        </div>
      )}

      {scannedResult && (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg mt-4 text-center">
          ✅ Scanned: {scannedResult}
        </div>
      )}
    </div>
  );
}
