import React from 'react';
import {render} from 'react-dom';
import Countdown from 'react-countdown-now';

const QuestionCount = ({questionCount,totalQuestions}) => {
    return (
		 <div className="questionCount">
			<h4>Question<span> {questionCount}</span> of <span>{totalQuestions}</span></h4>
			<hr></hr>
		</div>
		);
}

const Questions = ({questionText}) => {
    return (
		<h5 className="questionText">{questionText}</h5>
    );
}

const AnswerOptions = ({op1,op2,op3,displayNextQuestion,displayPreviousQuestion,index,userResponse}) => {
		
		var userAnswer='';
		var answerError=false;
		
		function handleChange(e) {
			userAnswer=e.target.value;
			if(userAnswer==='' ||userAnswer===null ){
			answerError=false;
			}else{
			answerError=true;
			}
		}
		
		function onClickAnswer() {
			if(answerError===true){
				displayNextQuestion(index,userAnswer);
			}else{
				alert('Please select the answer');
			}
		}
	    
		function onClickBack() {
			displayPreviousQuestion(index);
		}

    return(
		<div>
			<div onChange={(e)=>{handleChange(e)}}>
			<h6>
				<div>
				<p><input type="radio" className="radioCustomButton" name="radioGroup" value={op1} /> {op1}</p>
				<p><input type="radio" className="radioCustomButton" name="radioGroup" value={op2} /> {op2}</p>
				<p><input type="radio" className="radioCustomButton" name="radioGroup" value={op3} /> {op3}</p>
				</div>
			</h6>
			</div>
			<div>
				{index>1?<button className="btn btn-secondary btn-lg btn-block btn-md" onClick={onClickBack}>Previous</button>:''}
				<p></p>
				{index<10?<button className="btn btn-secondary btn-lg btn-block btn-md" onClick={onClickAnswer}>Next</button>:
						 <button className="btn btn-secondary btn-lg btn-block btn-md" onClick={onClickAnswer}>Submit</button>}
			</div>
		</div>
	);
}

const Score = ({score}) => {
    return (
		<div>
        <h5><span className="quiz score">You Scored: {score}</span></h5>
        <h5><span className="quiz score">Please Close the window. Or Screen will become blank in few seconds.</span></h5>
		<h6><Timer/></h6> 
		</div>
    );
}

const Completionist = () => {
	return  (
		<div>
		{dt}
		</div>		
	);
}

const Timer	 = () => {
	var dt='';
	return (
	<div>
		<Countdown date={Date.now() + (1000*5)} >
  			<Completionist/> 
		</Countdown>
	</div>
	);
}

class Quizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
		this.checkAnswer = this.checkAnswer.bind(this);
		this.displayPreviousQuestions=this.displayPreviousQuestions.bind(this);
    }
    	
	getInitialState() {
        return {
            questionData: [
                {question: "In which year of First World War Germany declared war on Russia and France?", option1:"1914",option2:"1915",option3:"1916",correctOption:"1914"},
                {question: "ICAO stands for? ", option1:"International Civil Aviation Organization",option2:"Indian Corporation of Agriculture Organization",option3:"Institute of Company of Accounts Organization",correctOption:"International Civil Aviation Organization"},
				{question: "India's first Technicolor film ____ in the early 1950s was produced by ____.",option1:"'Jhansi Ki Rani', Sohrab Modi",option2:"'Jhansi Ki Rani', Sir Syed Ahmed",option3:"'Mirza Ghalib', Sohrab Modi",correctOption:"'Jhansi Ki Rani', Sohrab Modi"},
                {question: "India's first satellite is named after?", option1:"Aryabhatta",option2:"Bhaskara II",option3:"Bhaskara I",correctOption:"Aryabhatta"},
                {question: "India's first ocean wave's energy project was launched in? ", option1:"1981",option2:"1991",option3:"1995",correctOption:"1991"},
				{question: "In which year, terrorists crash two planes into New York's World Trade Centre on September 11 in a sequence of destruction?", option1:"2000",option2:"2001",option3:"2002",correctOption:"2001"},
				{question: "Hitler party which came into power in 1933 is known as? ", option1:"Labour Party",option2:"Nazi Party",option3:"Democratic Party",correctOption:"Nazi Party"},
				{question: "FFC stands for? ", option1:"Foreign Finance Corporation",option2:"Film Finance Corporation",option3:"Federation of Football Council",correctOption:"Film Finance Corporation"},
				{question: "Each year World Red Cross and Red Crescent Day is celebrated on? ", option1:"May 8",option2:"June 8",option3:"June 18",correctOption:"May 8"},
				{question: "Escape velocity of a rocket fired from the earth towards the moon is a velocity to get rid of the? ", option1:"Earth's gravitational pull",option2:"Moon's gravitational pull",option3:"Centripetal force due to the earth's rotation",correctOption:"Earth's gravitational pull"}
				],
            progress: 0,
            score: 0,
			totalQuestions:10,
			userResponse:[]
        };
    }	
	
	displayPreviousQuestions(index){
		var newProgress=this.state.progress - 1;        		/*Setting to previous index*/
		this.setState({progress: newProgress});
		}
			
	checkAnswer(index,userAnswer) {
		var newScore = 0, newProgress = 0;
		
		var userResponse=this.state.userResponse;		
		userResponse[index]=userAnswer;		
		this.setState({userResponse: userResponse});              /*Storing user Response*/
		
		newProgress = this.state.progress + 1;
        this.setState({progress: newProgress});
		
		if(index===this.state.totalQuestions){
			for(var i=0;i<this.state.totalQuestions;i++){
				var correctAnswer=this.state.questionData[i].correctOption;
				var userAnswer=this.state.userResponse[i+1];
				if(correctAnswer===userAnswer){
					newScore+=1;
				}
			}
			this.setState({score: newScore});           			/*TO Update the score*/
		}
    }
	
	render() {		
        var questionDatas = this.state.questionData[this.state.progress];
		var total=this.state.totalQuestions;
		if(total>this.state.progress) {
            return (
				<div>
                <div className="quiz container">
					 <QuestionCount questionCount={this.state.progress+1}  totalQuestions={total}/>
                     
					 <Questions questionText={questionDatas.question} />
					 
					 <AnswerOptions op1={questionDatas.option1} op2={questionDatas.option2} op3={questionDatas.option3} 
					  displayNextQuestion={this.checkAnswer} displayPreviousQuestion={this.displayPreviousQuestions}
					  index={this.state.progress+1} userResponse={this.state.userResponse}/>
				</div>
				</div>
            );
        } else {
            return (
                <div className="quiz container">
                    <h5><p className="quiz question">Quiz Finished!</p>
					 <Score score={this.state.score} /></h5>
                </div>
            );
        }
    }
}
export default Quizer;