import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from 'next/router';
import ContactForm from './ContactForm';
import MaintenanceBanner from './MaintenanceBanner';
import HireMeModal from './HireMeModal';

const NavBar = ({ darkMode }) => {
  const router = useRouter();
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Retrieve isBannerVisible state from local storage on component mount
      const storedIsBannerVisible = localStorage.getItem('isBannerVisible');
      // If there's a value in local storage, use it; otherwise, default to false
      return storedIsBannerVisible === 'true';
    }
    // If localStorage is not available (during SSR), default to false
    return false;
  });


  useEffect(() => {
    // Store initial banner visibility state in local storage
    localStorage.setItem('isBannerVisible', isBannerVisible);
  }, [isBannerVisible]);


   const handleMoonIconClick = () => {
    setIsBannerVisible(true);
  };

  const handleCloseBannerClick = () => {
    setIsBannerVisible(false);
    // Remove isBannerVisible state from local storage
    localStorage.removeItem('isBannerVisible');
  };

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };


  //The 'Hire Me CTA'
  const handleCTAClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  return (
    <div className={`py-4 px-8 mb-12 flex justify-between items-center text-black ${darkMode ? 'dark:text-white' : 'text-black'}`}>
      <Link href="/">
        <h1 className="font-burtons text-xl">idncod.</h1>
      </Link>
      <ul className="flex items-center space-x-6">
        <li className={router.pathname === '/' ? 'underline' : ''}>
          <Link href="/">Me</Link>
        </li>
        <li className={router.pathname === '/blog' ? 'underline' : ''}>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <button onClick={handleCTAClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Hire Me</button>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={handleMoonIconClick}
            className="cursor-pointer text-2xl"
          />
        </li>
      </ul>
      <>
      {isContactFormVisible && <ContactForm onClose={handleCloseContactForm} />}
      {isBannerVisible && <MaintenanceBanner onClose={handleCloseBanner} />}
      {isModalVisible && <HireMeModal onClose={handleCloseModal} />}
      </>
      </div>
  );
};

export default NavBar;



      {/* <nav className="py-10 mb-12 flex justify-between dark:text-white">
             <a href="#">
             <h1 className="font-burtons text-xl">idncod.</h1>
             </a>
             <ul className="flex items-center">
               <li>
                 <BsFillMoonStarsFill
                   onClick={() => setDarkMode(!darkMode)}
                   className=" cursor-pointer text-2xl"
                 />
               </li>
               <li>
               <a
                   className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                   href="mailto:idncod@proton.me"
                 >
                   Hire me
                 </a>
               </li>
             </ul>
           </nav> */}
