import React,{useState, createContext} from 'react';

const MyContext = createContext();

function MyProvider({ children }){
    const [value, setValue] = useState("Hello, World!");
    return (
        <MyContext.Provider value={{value, setValue}}>
            {children}
        </MyContext.Provider>
    );
}

export {MyContext, MyProvider};