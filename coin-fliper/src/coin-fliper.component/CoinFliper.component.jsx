import {Component} from "react";
import Coin from "./Coin";
import "./Coin.css"

function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr [randomIndex];
}

class CoinFliper extends Component{
    static defaultProps = {
        coins:[
            {side : "head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side : "tail", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor() {
        super();
        this.state = {
            currCoin : null,
            nFlips: 0,
            nHead: 0,
            nTail: 0
        };
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState((st)=>{
            return{
                currCoin: newCoin,
                nFlips: st.nFlips +1,
                nHead: st.nHead + (newCoin.side === "head" ? 1:0),
                nTail: st.nTail + (newCoin.side === "tail" ? 1:0)
            }
        })
    }
    flippingHandler= ()=> {
        this.flipCoin();
    };
    
    render() {
        return(
            <div>
                <h2>Let's flip a coin!!</h2>
                <button onClick={this.flippingHandler}> Flip Me!</button>
                <div>
                    {this.state.currCoin && <Coin info={this.state.currCoin}></Coin>}
                </div>
                <p>Out of {this.state.nFlips} flips there are {this.state.nHead} heads, and {this.state.nTail} tails.</p>
            </div>

        );
    }
}
export default CoinFliper;