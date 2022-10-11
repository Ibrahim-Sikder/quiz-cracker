import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizsDetails.css';

const QuizsDetails = () => {
    const quizes = useLoaderData()
    
    console.log(quizes)
    return (
        <div>
            <h2>Quize of {quizes.data.name} </h2>
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[0].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[0].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[0].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[0].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[0].options[3]}
                </div>
            </div>
            
            {/* Second question */}

            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[1].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[1].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[1].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[1].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[1].options[3]}
                </div>
            </div>

            {/* Third questions  */}

            
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[2].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[2].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[2].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[2].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[2].options[3]}
                </div>
            </div>
            {/* Four question  */}

             
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[3].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[3].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[3].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[3].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[3].options[3]}
                </div>
            </div>
            {/* Five questions */}

             
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[4].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[3].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[3].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[3].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[3].options[3]}
                </div>
            </div>
            {/* Six question  */}

             
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[5].question}</span></h3>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[4].options[0]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[4].options[1]}
                </div>
            </div>
            <div className="question">
                <div className='leftQuestion'>
                    {quizes.data.questions[4].options[2]}
                </div>
                <div className='rightQuestion'>
                    {quizes.data.questions[4].options[3]}
                </div>
            </div>
            
        </div>
    );
};

export default QuizsDetails;