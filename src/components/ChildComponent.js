import React from 'react';

function ChildComponent({value}){
    console.log("렌더링");
    return <div>{value}</div>;
}

export default React.memo(ChildComponent);