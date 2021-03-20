import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {/*hh=each element in counters[]*/}
                {this.state.counters.map(hh=>(
                    <Counter key={hh.id} value1={hh.value}></Counter>
                    ))}
            </div>
        );

    }
}

// export default Counters;