import React, { useEffect } from 'react';

const MaintenanceBanner = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hides banner after 5 seconds
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]); // Dependency added to ensure effect runs when onClose changes

  return (
    <div
      className="bg-green-300 text-black p-2 text-center fixed top-0 left-0 w-full"
      style={{ zIndex: 9999 }}
    >
      This feature is under maintenance from 10/10/2023 until 20/10/2023 due to ongoing version update.
      <button className="ml-4 text-blue-600" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default MaintenanceBanner;


