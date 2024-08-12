import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function ExternalUpdateButton(){
    const {setValue} = useContext(MyContext);
    const handleExternalUpdate = () =>{
        setValue("external update!");
    }
    return <button onClick={handleExternalUpdate}>Update Button</button>;
}

export default ExternalUpdateButton;