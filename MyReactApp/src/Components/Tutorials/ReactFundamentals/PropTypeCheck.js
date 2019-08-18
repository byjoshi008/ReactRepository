import React from 'react';
import PropTypes from 'prop-types';

export default class PropTypeCheck extends React.Component{
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }
    render(){
        const {firstName, lastName} = this.props;
        return(
            <div>Hello {firstName} {lastName}!</div>
        )
    }
}