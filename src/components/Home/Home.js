import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
        <div>
            

        </div>
    );
};

export default Home;