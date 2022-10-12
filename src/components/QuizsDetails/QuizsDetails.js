import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizsDetails.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import DisplayQuizes from '../DisplayQuizes/DisplayQuizes';
const QuizsDetails = () => {
    const quizes = useLoaderData()
    console.log(quizes)
   
    return (
        <div>
         {
           quizes.data.questions.map(qui => 
           <DisplayQuizes
           key={qui.id}
           qui={qui}
           ></DisplayQuizes>) 
         }
        </div>
    );
};

export default QuizsDetails;