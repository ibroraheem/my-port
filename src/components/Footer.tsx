import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container">
        <div className="text-center">
          <p className="text-neutral-400">
            &copy; {currentYear} Ibrahim Abdulraheem – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;