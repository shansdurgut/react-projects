import './App.css';
import {Component} from "react";
import CoinFliper from "./coin-fliper.component/CoinFliper.component";

class App extends Component{
  render() {
    return (
        <div className="App">
        <CoinFliper  />
        </div>
    );
  }


}

export default App;
