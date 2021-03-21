import React from 'react';

function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
class Board extends React.Component{


    renderSquare(i) {
        return (
            <Square key={i} onClick={()=>this.props.onClick(i)} value = {this.props.sq[i]}/>

        );
    }

    render(){
        return (
            <div>
                <div className="board">
                    <div className="row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}


class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            history: [{sq: Array(9).fill(null)}],
            xNext: true,
        };
    }

    handleClick(index){
        const history = this.state.history;
        const current = history[history.length-1];
        const sq = current.sq.slice();
        if(calculateWinner(sq)||sq[index]){
            return;
            // if we have a winning or this button is checked
        }
        sq[index] = this.state.xNext?'X':'O';
        this.setState({
            history: history.concat([{
                sq: sq
            }]),
            xNext: !this.state.xNext,
        })

    }

    render(){
        const history = this.state.history;
        const current = history[history.length-1];
        let status;
        if(calculateWinner(current.sq)){
            status = 'Winner: '+ (this.state.xNext?'O':'X');
        }else{
            status = 'Next: '+ (this.state.xNext?'X':'O');
        }

        return(
            <div className={"game"}>
                <div>{status}</div>
                <Board sq = {current.sq} onClick = {(i)=>this.handleClick(i)} />
            </div>
        );
    }
}

export default Game;
// export default class Game extends React.Component{
//
// }
