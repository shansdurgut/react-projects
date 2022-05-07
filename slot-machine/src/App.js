import {Component} from "react";
import Machine from "./components/machine.component";
import './App.css';

class App extends Component{
  constructor() {
    super();
      this.state = {"🍇": 1,   "🍓": 1,  "🍏":1}
  }

  render() {
      return (
          <div className={"Slot-machine"}>
            <h1>{"Slot Machine"}</h1>
            <span>
                <Machine item = {this.state} />
                <Machine item = {this.state} />
                <Machine item = {this.state} />
            </span>
          </div>
      );
  }
}


export default App;
