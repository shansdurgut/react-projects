import {Component} from "react";
<<<<<<< Updated upstream

=======
function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}
>>>>>>> Stashed changes
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