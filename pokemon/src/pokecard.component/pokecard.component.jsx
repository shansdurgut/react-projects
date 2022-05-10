import {Component} from "react";

class PokeCard extends Component{
    render(){
        return (
            <div className={"PokeCard"}>
                <h1>{this.props.name}</h1>
                <h1>{this.props.type}</h1>
                <h1>{this.props.exp}</h1>
            </div>
        )
    }
}


export default PokeCard;