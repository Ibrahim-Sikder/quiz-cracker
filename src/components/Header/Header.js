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
                <h2>Welcome to my website </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate esse asperiores praesentium officia explicabo earum iure? Ut, assumenda ipsa adipisci voluptatibus illum similique necessitatibus labore quisquam sequi dolorum rerum harum molestiae, officiis quaerat soluta! Dolore commodi reiciendis doloremque perspiciatis culpa! Magni rerum numquam corrupti natus sit architecto voluptas perferendis.</p>
            </div>
        </div>
    );
};

export default Header;