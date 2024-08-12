import React from 'react';
import ButtonClick from '../components/ButtonClick';
import NameForm from '../components/NameForm';
import Greeting from '../components/Greeting';
import NumbersList from '../components/NumbersList';
import { MyProvider } from '../context/MyContext';
import DisplayValue from '../components/DisplayValue';
import ExternalUpdateButton from '../components/ExternalUpdateButton';

function Home(){
    const number = [1,2,3,4,5];
    return(
        <MyProvider>
          <div className="App">
            <h1>React Event Handling and Forms</h1>
            <ButtonClick />
            <NameForm />
            <Greeting isLoggedIn={true}/>
            <NumbersList numbers={number}/>
            <DisplayValue/>
            <ExternalUpdateButton/>
          </div>
        </MyProvider>);
}

export default Home;