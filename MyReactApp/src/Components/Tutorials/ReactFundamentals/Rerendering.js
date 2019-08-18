import React from 'react';

export default class Rerendering extends React.Component{
    
    state = { time: new Date().toLocaleTimeString() };
    tickInterval = null;
    
    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    componentDidMount(){
        this.tick();
        this.tickInterval = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        if(this.tickInterval){
            clearInterval(this.tickInterval);
        }
    }
    
    render(){
        return(
            <div>It is {this.state.time}</div>
        )
    }
}
