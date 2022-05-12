import {Component} from "react";
import './App.css';
import "./clicker"

class App extends Component {
  constructor() {
    super();
    this.state = {num:0};
  }

  handleClick = () => {
    let rand =Math.floor(Math.random()*10);
    this.setState( {num : rand});
  }
  render(){
    return(
      <div className="App">
        <h1>Number is: {this.state.num}</h1>
         <button onClick={this.handleClick}>Click and get random number!</button>
      </div>
    );
  }
}
export default App;
