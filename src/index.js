import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import quizServer from './quizService/index';
import QuestionBox from './components/questionBox';
import Result from './components/result'
import style from './index.module.scss';

class QuizBee extends Component {

    // State
    state = {
        questionBank: [],
        score: 0,
        response: 0
    }

    // Get Question API
    getQuestion () {
        quizServer().then(question => {
            this.setState({
                questionBank: question
            })
        });
    }

    // ComponentDid Mont
    componentDidMount() {
        this.getQuestion();
    }

    // ComputeAnswer
    
    computeAnswer = (answer, correct) => {
        if ( answer === correct ) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            response: this.state.response + 1
        })
    }

   // PlayAgain
   
   playAgain = () => {
       this.getQuestion();
       this.setState({
           score: 0,
           response: 0
       });
   }

    render() {

        const { questionBank, score, response } = this.state;
        console.log(score, response)
        return (
            <div className={style.container}>
                <div className={style.title}>QuizBee</div>

                { /** Question */}
                {   questionBank.length >= 5 &&
                    response < 5 &&
                    questionBank.map( ({question, answers,correct, questionId}) => (
                    <QuestionBox
                        question={question}
                        options={answers}
                        selected={answer => this.computeAnswer(answer, correct)}
                        style={style}
                        key={questionId}
                         />
                ) )}

                    { response >= 5 && <Result 
                        score={score} 
                        playagain={this.playAgain} 
                        style={style}/> }
            </div>
        );
    }
}


ReactDOM.render(<QuizBee />, document.querySelector('#root'));