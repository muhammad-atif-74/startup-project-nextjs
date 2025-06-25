import { auth } from '@/auth'
import Image from 'next/image'
import React from 'react'
const Navbar = async () => {
  const session = await auth()
  return (
    <nav className="w-full px-8 py-6 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Logo</span>
        </div>

        {/* Right side - Login or Profile */}
        <div className="flex items-center">
          {session && session?.user ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                <Image
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Profile"
                />
              </div>
              <button
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar