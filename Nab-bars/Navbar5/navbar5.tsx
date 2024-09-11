import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaBlog, FaChalkboardTeacher, FaBars, FaTimes } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  const navItems = [
    { name: 'Home', icon: <FaHome />, link: '#' },
    {
      name: 'Services',
      icon: <MdExpandMore />,
      link: '#',
      dropdown: ['Web Development', 'Mobile Apps', 'UI/UX Design'],
    },
    { name: 'About', icon: <FaInfoCircle />, link: '#' },
    { name: 'Blogs', icon: <FaBlog />, link: '#' },
    { name: 'Faculty', icon: <FaChalkboardTeacher />, link: '#' },
  ];

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  };

  const NavLink = ({ item }) => (
    <li className="relative group">
      <a
        href={item.link}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-colors duration-200"
        onMouseEnter={() => setActiveDropdown(item.name)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <span className="mr-2">{item.icon}</span>
        {item.name}
      </a>
      {item.dropdown && activeDropdown === item.name && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
        >
          {item.dropdown.map((subItem, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {subItem}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">Company</span>
            </a>
          </div>
          {!isMobile && (
            <ul className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
            </ul>
          )}
          {isMobile && (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 float-right"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-colors duration-200"
                    onClick={() => item.dropdown && setActiveDropdown(item.name === activeDropdown ? null : item.name)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </a>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="ml-6 mt-2 space-y-1"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;