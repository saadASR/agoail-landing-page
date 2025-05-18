import React from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed w-full bg-[#EFECDD] z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo-container">
          <h1 className="text-2xl font-bold text-[#4E6B4D]">Agoail</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#4E6B4D]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">Home</a>
          <a href="#about" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">About</a>
          <a href="#products" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">Products</a>
          <a href="#benefits" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">Benefits</a>
          <a href="#how-to-use" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">How to Use</a>
          <a href="#contact" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium">Contact</a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EFECDD] py-4 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#products" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#benefits" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#how-to-use" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>How to Use</a>
            <a href="#contact" className="text-[#4E6B4D] hover:text-[#3A5039] font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};
