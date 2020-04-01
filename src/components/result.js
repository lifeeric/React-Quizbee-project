import React from 'react';

const Result = ({score, playagain, style}) => {

    return (
        <div className={style.result}>
            <h2> You Scored {score} / 5! </h2>
            <button onClick={playagain}> Play Again!</button>
        </div>
    );
}

export default Result;