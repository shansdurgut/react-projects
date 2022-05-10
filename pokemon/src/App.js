import {Component} from "react";
import PokeCard from "./pokecard.component/pokecard.component";
import './App.css';

class App extends Component{
    render(){
      return(
          <div>
            <PokeCard id={4} name={"Charmander"} type={"fire"} exp={62 }>

            </PokeCard>
          </div>
          )
    }
}

export default App;
