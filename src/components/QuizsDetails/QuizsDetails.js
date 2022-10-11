import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizsDetails = () => {
    const quizes = useLoaderData()
    
    return (
        <div>
            <h2>All quize </h2>
        </div>
    );
};

export default QuizsDetails;