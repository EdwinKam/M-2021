import React, {Component} from "react";

class Counter extends Component {
    state={
        count:this.props.value1,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1','tag2','tag3'],
        tag:[]
    };

    badge={
        normal: 'badge m-2 badge-primary',
        zero:'badge m-2 badge-warning'
    };

    styles ={
        fontSize: 30,
        frontWeight: 'bold'
    };
    renderTags(){
        if(this.state.tags.length===0)return <p>there is no tag!</p>;
        return (<ul>
            {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>)
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this); //'this' refer to
    //     //the class here, so we set this.handleInc = Counter class
    // }
    displayInc=()=>{
        console.log('Inc ed',this.state); //'this'here refers to the dunction value
        //we set this function to the class earlier
    }

    handleIncrement=()=>{
        this.setState({count: this.state.count+1});
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        // console.log('prop',this.props) props is the obj that passed in counters
        return (
            <div>
                {/*<img src={this.state.imageUrl} alt="ddddd"/>*/}
                <span className= {this.badgeColor()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}className ="btn btn-dark">+</button>
                &nbsp;
                <button onClick={this.handleDecrement}className ="btn btn-dark">-</button>
                {this.renderTags()}
            </div>
        );
    }
    badgeColor(){
        return ((this.state.count===0)? this.badge.zero:this.badge.normal);
    }
    formatCount(){
        const { count } = this.state;
        return count === 0? 'Zero': count;
    }
}

export default Counter;