'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';


export default function Dashboard() {
  const router = useRouter();

  const user = {
    phone: '0709123456',
    name: 'Jane mwijukuruza wa rutinampora Doe',
    points: 12000,
  };

  const [showScanner, setShowScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState('');
  const scannerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    if (showScanner && scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
  'qr-reader',
  { fps: 10, qrbox: 250 },
  false // verbose mode off
);

      scanner.render(
        (decodedText) => {
          setScannedResult(decodedText);
          setShowScanner(false);
          scanner.clear();
        },
        (err) => {
          console.warn('QR Scan error:', err);
        }
      );
    }
  }, [showScanner]);

  return (
    <>
      <Head>
        <title>Phone Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-6 px-4">
        <div className="w-full max-w-sm bg-white rounded-xl shadow p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Welcome, {user.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{user.phone}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center mb-6">
            <h3 className="text-lg font-semibold">Points Balance</h3>
            <p className="text-3xl font-bold text-blue-600">{user.points}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center mb-6">
            <button className="bg-green-100 text-green-700 p-3 rounded-lg shadow hover:bg-green-200 transition">
              Profile
            </button>
            <button className="bg-yellow-100 text-yellow-700 p-3 rounded-lg shadow hover:bg-yellow-200 transition">
              History
            </button>
            <button className="bg-purple-100 text-purple-700 p-3 rounded-lg shadow hover:bg-purple-200 transition">
              Settings
            </button>
            <button
              className="bg-red-100 text-red-700 p-3 rounded-lg shadow hover:bg-red-200 transition"
              onClick={() => router.push('/login')}
            >
              Logout
            </button>
          </div>

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
      </main>
    </>
  );
}
