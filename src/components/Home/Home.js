import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quizs from '../Quizs/Quizs';





const Home = () => {
    const quizes = useLoaderData()
   console.log(quizes)
    return (
        <div>
            <Banner></Banner>
           
           </div>
    );
};

export default Home;