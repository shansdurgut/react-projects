import {Component} from "react";
import PokeCard from "../pokecard.component/pokecard.component";
import "./pokedex.component.scss"


class Pokedex extends Component{
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }
        return(
            <div className={"Pokedex"}>
                {title}
                <h4>Total Experience:{this.props.exp}</h4>

                <div className={"Pokedex-cards"}>
                    {this.props.pokemon.map((pokeItem) => (
                        <PokeCard id={pokeItem.id} name={pokeItem.name} type={pokeItem.type} exp={pokeItem.base_experience}/>
                    ))}
                </div>

            </div>
        );
    }
}
export default Pokedex;