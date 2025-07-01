"use client"
import { ChevronDown, Github, LogOut, User } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const { data: session, status } = useSession()


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full px-8 py-4 bg-primaryColor shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image
              width={1000}
              height={1000}
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-full"
            />
          </div>

          <div className="flex items-center justify-end">
            {status === "loading" ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span className="text-green-100">Loading...</span>
              </div>
            ) : session?.user ? (
              <div className="flex items-center space-x-4">
                {/* User greeting */}
                <div className="hidden sm:block">
                  <span className="text-sm text-green-100">
                    Welcome, <span className="font-medium text-white">{session.user.name}</span>
                  </span>
                </div>

                {/* Profile dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 p-1 rounded-full hover:bg-green-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-600 hover:border-green-400 transition-colors">
                      <Image
                        width={40}
                        height={40}
                        src={session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-green-200 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white/80 rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* User info */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              width={32}
                              height={32}
                              src={session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{session.user.name}</p>
                            <p className="text-xs text-gray-500">{session.user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu items */}
                      <div className="py-1">
                        <button
                          onClick={() => {
                            console.log('Profile clicked');
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <User size={16} />
                          <span>Profile</span>
                        </button>

                        <div className="border-t border-gray-200 my-1"></div>

                        <button
                          onClick={() => signOut()}
                          className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={16} />
                          <span>Sign out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (

              <div
                className="flex items-center space-x-2 px-3 py-2 text-green-100 hover:text-white hover:bg-primaryColorHover cursor-pointer rounded-lg transition-all duration-200 ease-in-out"
                onClick={() => signIn('github')}

              >
                <Github size={18} />
                <span className="hidden sm:inline text-sm font-medium">GitHub</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar