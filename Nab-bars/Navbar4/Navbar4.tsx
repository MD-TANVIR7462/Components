import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiGrid, FiInfo, FiBook, FiUsers, FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: <FiHome />, label: 'Home' },
    { icon: <FiGrid />, label: 'Services' },
    { icon: <FiInfo />, label: 'About' },
    { icon: <FiBook />, label: 'Blogs' },
    { icon: <FiUsers />, label: 'Faculty' },
  ];

  const NavItem = ({ icon, label }) => (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </motion.li>
  );

  const DesktopNav = () => (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 shadow-lg">
      <ul className="flex justify-between items-center max-w-6xl mx-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );

  const MobileNav = () => (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 shadow-lg flex justify-between items-center">
      <span className="text-2xl font-bold">Menu</span>
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-purple-600 to-indigo-700 p-4 shadow-lg"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <FiX />
            </button>
            <ul className="mt-16 space-y-6">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default NavBar;