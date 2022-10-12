import React from 'react';
import { Link } from 'react-router-dom';
import './Quizs.css';
const Quizs = ({quiz}) => {
   
    const {name, id, logo, total} = quiz
    
    return (
            <div>
                  <div className="">
                  
                        <div className="quizPractice">
                             <img className='bg-dark' src={logo} alt="logo" />
                            <div className="">
                            <h2>{name}</h2>
                           <Link to={`Quizs/${id}`}>  <button className="btn btn-danger">Start practice</button></Link>
                            </div>
                            <p>{total}</p>
                        </div>
                    </div>
               
            
            
        </div>
    );
};

export default Quizs;