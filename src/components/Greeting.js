import React from 'react';

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    return (
        <div>{isLoggedIn ? <h1>Wellcome back!</h1> : <h1>Please sign up.</h1>}</div>
    );
}
export default Greeting;