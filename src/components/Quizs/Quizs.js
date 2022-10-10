import React from 'react';
import './Quizs.css';
const Quizs = ({quiz}) => {
   
    const {name, id, logo, total} = quiz
    console.log(quiz)
    return (
            <div>
                  <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                        <div className="quizPractice">
                             <img src={logo} alt="logo" />
                            <div className="">
                            <h2>{name}</h2>
                            <button className="btn btn-danger">Start practice</button>
                            </div>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
              </div>
            
            
        </div>
    );
};

export default Quizs;