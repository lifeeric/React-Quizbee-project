import React, { useState } from 'react';

const QuestionBox = ({question, options, selected, style}) => {

    // useState 
    const [answer, setAnswer] = useState(options);

console.log(answer)
   return (
        <div className={style.questionBox}>
            <div className=""> {question} </div>
                { answer.map( (answer, index) => (
                    <button 
                        className={style.options}
                        key={index}
                        onClick={() => {
                            setAnswer([answer])
                            selected(answer)
                        }}> 
                        {answer} 
                    </button>
                ))}
        </div>
   );
}

export default QuestionBox;