import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Logo in Hero */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden animate-pulse-glow">
                  <div className="w-12 h-12 bg-white rounded-md relative">
                    {/* Robot eyes */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    {/* Headset */}
                    <div className="absolute -top-2 left-0 right-0 h-4 bg-blue-600 rounded-t-md"></div>
                    <div className="absolute -left-2 top-4 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute -right-2 top-4 w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  {/* Sound waves */}
                  <div className="absolu
