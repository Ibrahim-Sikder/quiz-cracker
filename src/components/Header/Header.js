import React from 'react';
import { Link  } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header-container  shadow flex align-items-center p-2'>
            <div className="quizTitle">
                <Link>Happy Quizzing ! </Link>
            </div>
                <div className="navbar">
                <Link to='/'>Home </Link>
                <Link to='topics'>Topics </Link>
                <Link to='static'>Statistics </Link>
                <Link to='blog'>Blog </Link>
                <Link to='about'>About </Link>
            </div>
           
        </div>
         <div>
                <h2 className='mt-5 pt-5'>Welcome To My React  Website !!</h2>
               <strong>
                I huge love codding !!
               </strong>
            </div>
        </div>
    );
};

export default Header;