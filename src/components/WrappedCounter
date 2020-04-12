import React from "react";
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'

const WrappedCounter = (props) => {
    console.log('WrappedCounter.js component');
    console.log('props', props);


    return (
        <div>
            <h1>result:</h1>
            <h2>{props.count}</h2>
            <br/>
            <button onClick={props.decrement}>decrement</button>
            &nbsp;
            <button onClick={props.increment}>increment</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log('state', state);

    return (
        {count: state.count}
    )
};

export default connect(mapStateToProps, {increment: increment, decrement: decrement})(WrappedCounter)
