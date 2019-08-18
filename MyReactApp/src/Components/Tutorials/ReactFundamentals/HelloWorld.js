import React from 'react';

const Message = props => <div>{props.msg}</div>
export default class HelloWorld extends React.Component {
  render(){
    return(
      <div className="container">
        <Message msg="Hello World" />
        <Message msg="Another Hello World" />
      </div>
    )
  }
}