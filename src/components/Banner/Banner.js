import React from "react";
import './Banner.css';
const Banner = () => {
  return (
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="bannerImg">
                <img
          src="https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg?w=2000"
          alt=""
        />
                </div>
            </div>
            <div className="col-md-6">
            <div className="bannerTitle mt-5 pt-3">
                    <h2>Amazing Quizzing !!! </h2>
                    <p>
                    0 I'm following javascriptissexy and learning how to make a dynamic
                    quiz. I found someone's own version of the quiz and looked at the
                    source code to learn how they approached the problem; after I took a
                    crack at it. I understand the html/css and some of the javascript code
                   
                    </p>
                    <button className="btn baannerBtn">Happy Quizzing</button>
                </div>
     
            </div>
        </div>
    </div>
  );
};

export default Banner;
