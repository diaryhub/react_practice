import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [value, setValue] = useState("");
    return (<div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text'/>
        <button onClick={()=> {setCount(count+1); setValue(text);}}>Increment</button>
        <p>Count : {count}</p>
        <ChildComponent value={value}/>
    </div>);
}

export default ParentComponent;