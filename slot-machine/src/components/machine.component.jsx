import {Component} from "react";

function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

class Machine extends Component{
    render(){
        const keys = Object.keys(this.props.item);
        const random = keys[Math.floor(Math.random() * keys.length)];

        return(
            <div className={"machine"}>
                <h1>{random}</h1>

            </div>
        )
    }
}
export default Machine;