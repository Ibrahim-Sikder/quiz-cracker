import React from 'react';

const Step = () => {
    return (
        <div>
            

            <div className="QuizsRap shadow mt-5 pt-5">
            <div className="questionDetails">
            <h1>Quize of {quizes.data.name} </h1>
            <h5>Quize : 1 </h5>
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
            </div>
            <div  className="eyeIcons">
                <EyeIcon onClick={toastify} ></EyeIcon>
            </div>
            <ToastContainer />
            
           </div>
            {/* Second question */}
            <div className="QuizsRap shadow">
            <div className="questionDetails">
            
            <h5>Quize : 2 </h5>
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
            </div>
            <div className="eyeIcons">
                <EyeIcon></EyeIcon>
            </div>
            
           </div>

            {/* Third questions  */}

            <div className="QuizsRap shadow">
            <div className="questionDetails">
            
            <h5>Quize :3 </h5>
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
            </div>
            <div className="eyeIcons">
                <EyeIcon></EyeIcon>
            </div>
            
           </div>
            {/* Four question  */}

            <div className="QuizsRap shadow">
            <div className="questionDetails">
            
            <h5>Quize : 4 </h5>
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
            </div>
            <div className="eyeIcons">
                <EyeIcon></EyeIcon>
            </div>
            
           </div>
            {/* Five questions */}
            <div className="QuizsRap shadow">
            <div className="questionDetails">
            
            <h5>Quize : 5</h5>
            <h3 className="mt-5 pb-3"><span>{quizes.data.questions[4].question}</span></h3>
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
            <div className="eyeIcons">
                <EyeIcon></EyeIcon>
            </div>
            
           </div>
            {/* Six question  */}

            <div className="QuizsRap shadow">
            <div className="questionDetails">
            
            <h5>Quize : 6 </h5>
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
            </div>
            <div className="eyeIcons">
                <EyeIcon></EyeIcon>
            </div>
            
           </div>

           
        </div>
    );
};

export default Step;


const toastify = () =>{
    toast.success('I am a toast !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}
