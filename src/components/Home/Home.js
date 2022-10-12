import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quizs from '../Quizs/Quizs';
import './Home.css'



const Home = () => {
    const quizes = useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            <dir className='divContainer'>
            {
                quizes.data.map( quiz=> 
                
                <Quizs
                key={quiz.id}
                quiz={quiz}
                
                ></Quizs>)
            }
            </dir>
           </div>
    );
};

export default Home;