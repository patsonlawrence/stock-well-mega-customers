// pages/login.js
'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
export default function Login() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="email / phone number" className="block text-sm font-medium text-gray-600">
                Email / PhoneNumber
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com or 07xxxxxxxx"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button            
            onClick={() => router.push('/dashboard')}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}
