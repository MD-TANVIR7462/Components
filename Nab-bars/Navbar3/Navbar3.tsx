import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaBlog, FaUsers, FaBars, FaTimes } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Services'];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const menuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  const NavItem = ({ href, icon, text, onClick, ariaLabel }) => (
    <motion.a
      href={href}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </motion.a>
  );

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?fit=crop&w=100&h=100"
                  alt="Company logo"
                />
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItem href="/" icon={<FaHome className="text-gray-500" />} text="Home" ariaLabel="Home" />
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <MdExpandMore className="ml-1" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
                    >
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={`#${service.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {service}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavItem href="/about" icon={<FaInfoCircle className="text-gray-500" />} text="About" ariaLabel="About" />
              <NavItem href="/blogs" icon={<FaBlog className="text-gray-500" />} text="Blogs" ariaLabel="Blogs" />
              <NavItem href="/faculty" icon={<FaUsers className="text-gray-500" />} text="Faculty" ariaLabel="Faculty" />
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavItem href="/" icon={<FaHome className="text-gray-500" />} text="Home" ariaLabel="Home" />
                <div className="relative">
                  <button
                    onClick={toggleServices}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <MdExpandMore className="ml-1" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pl-4"
                      >
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={`#${service.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {service}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
{/* if you want you can use LINK here form react or next js*/}
                <NavItem href="/about" icon={<FaInfoCircle className="text-gray-500" />} text="About" ariaLabel="About" />
                <NavItem href="/blogs" icon={<FaBlog className="text-gray-500" />} text="Blogs" ariaLabel="Blogs" />
                <NavItem href="/faculty" icon={<FaUsers className="text-gray-500" />} text="Faculty" ariaLabel="Faculty" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navigation;
