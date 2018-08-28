import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Quiz from './Quiz.jsx';

class Login extends React.Component{
	constructor(props){
		super();
		this.state={
			redirect:false,
			employeeID:'',
		};
		this.submitForm = this.submitForm.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}
	
	handleChange(e){
		if(e.target.name==='employeeID'){
			if(e.target.value==='' || e.target.value===null ||e.target.value.length<7 ||e.target.value.length>7){
				this.setState({
				employeeIDError:true
				})
			}
		else {
			this.setState({
			employeeIDError:false,
			employeeID:e.target.value,
			})	
		}
	}
	}
	
	submitForm(){
		
		if(this.state.employeeIDError===false){
				this.setState({redirect:true});	
		}else{
		alert("Please Enter your Employee ID");
		}		
	}	

	clearForm(e){  
}	
	
	 render(){
		 if(this.state.redirect===true ){
			 return (<div><Quiz/></div>)
		 }
   const myStyle = {
	position: 'absolute',
	margin: 'auto',
	align:'center',
	top: 700,
    right: 0,
    bottom: 0,
    left: 300,
    width: 1000,
    height: 1000,
};
			 
		return(
		<div style={myStyle}>
			<div className="container">
				<div className="card card-login col-sm-9 ">
					<div className="card-header text-center"><h3>Login to Play Quiz</h3></div>
						<div className="card-body">
								<form id="signup-form">
								<div className="form-group">
								<div className="form-label-group">	
								<label htmlFor="Employee ID"><b>Employee ID : </b></label>
								<input className="form-control" type="number" name="employeeID"  placeholder="Employee ID" 
								onChange={(e)=>{this.handleChange(e)}}/>
								{this.state.employeeIDError ? <span style={{color: "red"}}><h6>Please Enter Your Employee ID( 7 digits)</h6></span> : ''}
								</div>
								</div>
								<button className="btn btn-secondary btn-lg btn-block btn-md" onClick={this.submitForm}>Submit</button>
								<input type="reset" className="btn btn-secondary btn-lg btn-block btn-md"/>
								</form>
						</div>			
					</div>
				</div>	
			</div>
		);	
		}
}
export default Login;