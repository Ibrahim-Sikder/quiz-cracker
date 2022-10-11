import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizsDetails = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
        <div>
            <h2>All quize </h2>
        </div>
    );
};

export default QuizsDetails;