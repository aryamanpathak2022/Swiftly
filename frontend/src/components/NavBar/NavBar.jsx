import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div className='bg-orange flex justify-between p-2'>
        <div>
          <button className='name text-4xl p-3'>Swiftly</button>
          <button className='ml-8 text-2xl'>Home</button>
          <button className='ml-8 text-2xl'>About us</button>
          <button className='ml-8 text-2xl'>Contact us</button>
        </div>

        <div className='flex items-center'>
          {/* Add the search bar with rounded corners */}
          <input
            type='text'
            placeholder='Search'
            className='mr-20 rounded-full w-2/5 '
          />

          {/* Add login and sign up buttons here */}
          <Link to={"/Login"}>
          <button className='mr-2 text-2xl p-4'>Login</button>
          </Link>
          <Link to={"/SignUp"}>
          <button className='mr-2 text-2xl'>Sign Up</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
