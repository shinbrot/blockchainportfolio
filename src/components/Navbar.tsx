import React, { useState } from 'react';
import { Menu, Wallet, Blocks, Code2, User, X } from 'lucide-react';
import Clock from './Clock';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/10 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white cursor-pointer md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm transition-colors"
              >
                <User size={16} />
                Jinshi.
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm transition-colors"
              >
                <Blocks size={16} />
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm transition-colors"
              >
                <Code2 size={16} />
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('wallet')}
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm transition-colors"
              >
                <Wallet size={16} />
                Connect
              </button>
            </div>
          </div>
          <Clock />
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 border-b border-gray-800/50">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white flex items-center gap-2 w-full py-2"
            >
              <User size={16} />
              Jinshi.
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white flex items-center gap-2 w-full py-2"
            >
              <Blocks size={16} />
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white flex items-center gap-2 w-full py-2"
            >
              <Code2 size={16} />
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('wallet')}
              className="text-gray-300 hover:text-white flex items-center gap-2 w-full py-2"
            >
              <Wallet size={16} />
              Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}