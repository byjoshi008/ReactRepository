import React, { Component } from 'react'
import {  createStore } from 'redux'

const counter = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

class Counter extends Component {
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        const {onIncrement, onDecrement} = this.props;
        const state = store.getState();
        return (
        <div>
            <h1>{state}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
        )
    }
}

export default class ReduxCounter extends Component {
    render(){
        return(
            <Counter 
                onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                onDecrement={() => store.dispatch({type: 'DECREMENT'})}
            />
        )
    }
}