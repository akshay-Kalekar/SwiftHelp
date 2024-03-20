import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex items-center justify-center  px-4 py-2 bg-white">
      {/* Text 1 */}
      <div className="flex items-center mr-1">
        <span className="mr-2">About Donation</span>
        <select className="border">
          
        </select>
      </div>
      
      {/* Text 2 */}
      <div className="flex items-center mr-1">
        <Link to={'blog'}>
        <span className="mr-2">Blog</span>
        </Link>
      </div>
      
      {/* Text 3 */}
      <div className="flex items-center mr-1">
        <Link to={'filter'}>
        <span className="mr-2">Support Us</span>
        </Link>
        <select className="border">
          
        </select>
      </div>
      
      {/* Text 4 */}
      <div className="flex items-center mr-1">
        <span className="mr-2">About Us</span>
        <select className="border">
         
        </select>
      </div>
      
      {/* Text 5 */}
      <div className="flex items-center mr-1">
        <span className="mr-2">News and Stories</span>
        <select className="border">
          
        </select>
      </div>
    </div>
  );
};

export default Navbar;
