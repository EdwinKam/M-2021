import React from 'react';

class Square extends React.Component{
    // state={
    //     value:0
    // }
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         value: null,
    //     };
    // }
    // setSquare(x){
    //     this.setState({value:x});
    // }
    render(){
        return (
            <button className="square" onClick={()=>{this.props.onClick()}}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            sq: Array(9).fill(null),
        };
    }


    handleClick(index){
        const sq = this.state.sq.slice();
        sq[index]='x';
        this.setState({sq:sq});
    }

    renderSquare(i) {
        return (
            <Square key={i} onClick={()=>this.handleClick(i)} value = {this.state.sq[i]}/>

        );
    }

    render(){
        return (
            <div>
                <div className="nextp">{"Next Player: x"}</div>
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


export default class Game extends React.Component{
    render(){
        return(
            <div className={"game"}>
                <Board />
            </div>
        );
    }
}
// export default class Game extends React.Component{
//
// }
