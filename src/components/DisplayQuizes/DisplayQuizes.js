import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Answer from '../Answer/Answer';
import './DisplayQuizes.css';

const DisplayQuizes = ({qui}) => {
    const [open, setOpen] = useState(true)

     const { question, options, correctAnswer, name } = qui 
     const  handleAns  = (correct) =>{
        if(correct === correctAnswer){
            toast.success('Good !! Your answer is correct.')
        }else{
            toast.warning('Opps !! You answer is incorrect')
        }
     }
   
    return (
        <div className='quizsAnsower'>
            <h1> Quizs name : {qui.name} </h1>
            <div className="showAnswerDiv">
                
            <h2> {question}</h2>

            <div onClick={() => setOpen(!open)} className='correctAnsoIcon'>
                {open ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>}
            </div>
                        </div>
            <div className={open ? 'hidden' : 'block'}>

                <h1 className='showCorrectAnswer'>
                    <span > </span>
                    {correctAnswer}
                </h1>
            </div>
            {
                options.map((option, idx) => 
                <Answer
                key={idx}
                option={option}
                handleAns={handleAns}
                ></Answer>)
            }
        </div>
    );
};

export default DisplayQuizes;