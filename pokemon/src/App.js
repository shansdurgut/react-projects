import {Component} from "react";

import Pokegame from "./pokegame.component/pokegame.component";

class App extends Component{
    render(){
      return(
          <div className={"App"}>
              <Pokegame />
          </div>
          )
    }
}

export default App;
