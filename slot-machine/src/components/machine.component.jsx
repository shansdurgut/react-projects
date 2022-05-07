import {Component} from "react";
function getRandomProperty(obj) {
    const keys = Object.keys(obj);

    return keys[Math.floor(Math.random() * keys.length)];
}
class Machine extends Component{
    render(){
        const symbol = this.props.item;

        const fruit1 = getRandomProperty(symbol);
        const fruit2 = getRandomProperty(symbol);
        const fruit3 = getRandomProperty(symbol);
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