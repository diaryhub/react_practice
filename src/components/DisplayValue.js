import React,{useContext} from 'react';
import { MyContext } from '../context/MyContext';

function DisplayValue(props){
    const {value} = useContext(MyContext);
    return (<div>{value}</div>);
}

export default DisplayValue;
