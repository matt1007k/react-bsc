import React from 'react'
import ComponentMessage from './ComponentMessage';

const ErrorMessage = ({errors}) => 
    <ComponentMessage
        variant="error"
        message={errors}
        iconClose={false}
    />


export default ErrorMessage;