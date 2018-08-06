import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//install and import some libreries as react-datepicker and moment and date-diff
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import DateDiff from 'date-diff';

class App extends Component {
	//Define constructor
	constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
	  endDate: moment()
    };
	//binding events onchange and on click
    this.handleChange = this.handleChange.bind(this);
	 this.handleChange2 = this.handleChange2.bind(this);
	 this.handleClick= this.handleClick.bind(this);
  }
//function that handle changes while picking the date from datepicker 1
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 //function that handle changes while picking the date from datepicker 2
    handleChange2(date) {
    this.setState({
      endDate: date
    });
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
		<fieldset>
			<legend>Get Days between two dates</legend>
			   <div>
			   <DatePicker  selected={this.state.startDate} onChange={this.handleChange}  isClearable={true}  placeholderText="I have been cleared!"/>
			  </div>
			   <div>
			  <DatePicker  selected={this.state.endDate} onChange={this.handleChange2}   isClearable={true}  placeholderText="I have been cleared!" />
			  </div>
			  <div>
			  {this.state.resultat}
			  <br/>
			  < button onClick={this.handleClick}>
				submit
			  </button>
			  </div>
				
		</fieldset>
        </p>
      </div>
    );
  }
  //Function Click event on Submit button that calculate the diff between two date
  handleClick() {
		const date1 = new Date(this.state.startDate);
		const date2 =new Date(this.state.endDate);
		const diff = new DateDiff(date2, date1);
		this.setState({
          resultat: diff.days()
        });
   
  }
}
/** improve design
add validation on date
validate second date must be superieur than first one
add label before datepicker
improve functions
deliver the project using GIT
ADD readme file
Build the solution
**/
export default App;
