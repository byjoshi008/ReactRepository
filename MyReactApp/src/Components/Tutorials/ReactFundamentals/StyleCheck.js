import React from 'react';
import { css } from 'react-emotion';

const box = css`
    border: 2px solid;
    font-size: 18px;
    font-weight: bold;
`;
const box_small = css`
    width: 60px;
    height: 60px;
`;
const box_medium = css`
    width: 90px;
    height: 90px;
`;
const box_large = css`
    width: 120px;
    height: 120px;
`;

function Box({style, size, className = '', ...rest}){
    const sizeClassName = size 
                            ? (size === 'small' ? box_small : (size === "medium" ? box_medium : (size === "large" ? box_large : '')))
                            : '';
    return(
        <div 
            className={`${box} ${className} ${sizeClassName}`.trim()}
            style={{paddingLeft: 20, ...style}}
            {...rest}>
        </div>
    )
}

export default class StyleCheck extends React.Component {
    render(){
        return(
            <div>
                <Box size='small' style={{backgroundColor: 'lightblue'}}>Small Box</Box>
                <Box size='medium' style={{backgroundColor: 'pink'}}>Medium Box</Box>
                <Box size='large' style={{backgroundColor: 'orange'}}>Large Box</Box>
            </div>
        )
    }
}
