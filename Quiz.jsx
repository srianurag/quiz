import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import Quizer from './Quizer.jsx';

class Quiz extends React.Component {

/*		constructor(props){
		super();
		this.state={
			warningTime:true
			};
		}
		componentWillMount(){
			setTimeout(()=>{
				this.setState({
					warningTime:false,
				})
			},1000*60*1)
		}
		{this.state.warningTime?"":window.alert("Only 2 Minutes are left Now.")}
*/
   render() {
	return (
	  <div>
	  <div className="row">
			<div class="col-sm-10">
				<div class="card">
					<div class="card-body">
							<p class="card-text"><Quizer/></p>						
					</div>
				</div>
			</div>
			<div class="col-sm-2">
				<div class="card">
					<div class="card-body">
							<p class="card-text">
							<strong>Time Left:<Timer/></strong></p>
							<p><strong><em>Note:</em></strong></p>
							<p><strong><em>1. Screen will become blank once time expires.</em></strong></p>
							<p><strong><em>2. You have to attempt all questions.</em></strong></p>
							<p><strong><em>3. Result will be displayed after the end of Quiz.</em></strong></p>
							<p><strong><em><u>Thank you and All the best.</u></em></strong></p>
					</div>
				</div>
			</div>
	     </div>
		 </div>
	  );
   }
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
		<Countdown date={Date.now() + (1000*60*20)} >
  			<Completionist/>
		</Countdown>
	</div>
	);
}
export default Quiz;