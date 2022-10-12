import React from 'react';
import { toast } from 'react-toastify';
import './Answer.css';
const Answer = ({name, option, correctAnswer, handleAns }) => {

    return (
        <div>
           
           <div className="quizsBtn">
           <button onClick={()=> handleAns(option)}>{option}</button>
           </div>
        </div>

    );
};

export default Answer;