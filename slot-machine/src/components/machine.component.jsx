import {Component} from "react";
function getRandomProperty(obj) {
    const keys = Object.keys(obj);

    return keys[Math.floor(Math.random() * keys.length)];
}
class Machine extends Component{
    render(){
        const fruit1 = getRandomProperty(this.props.item);
        const fruit2 = getRandomProperty(this.props.item);
        const fruit3 = getRandomProperty(this.props.item);
        return(
            <div className={"machine"}>
                <span>{fruit1}</span>
                <span>{fruit2}</span>
                <span>{fruit3}</span>

                <p>{(fruit1 === fruit2 && fruit2 === fruit3) ? "You WIN!" : "You LOOSE!"}</p>

            </div>
        )
    }
}

export default Machine;