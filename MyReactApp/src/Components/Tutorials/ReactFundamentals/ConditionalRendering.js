import React from 'react';

function Message(props){
    return(
        props.message ? <div>{props.message}</div> : <div>No Message</div>
    )
}

const ConditionalRendering = () => (
    <div>
        <Message message={"Hello World"}/>
        <Message message={null}/>
    </div>
)

export default ConditionalRendering;