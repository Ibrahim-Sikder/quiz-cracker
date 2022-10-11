import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quizs from '../Quizs/Quizs';





const Home = () => {
    const quizes = useLoaderData()
   
    return (
        <div>
            <Banner></Banner>
            {
                quizes.data.map( quiz=> 
                
                <Quizs
                key={quiz.id}
                quiz={quiz}
                
                ></Quizs>)
            }
           </div>
    );
};

export default Home;