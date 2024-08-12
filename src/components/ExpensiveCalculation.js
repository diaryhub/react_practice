import React, { useMemo } from 'react';

function ExpensiveCalculation({num}){
    const calculate = (n) =>{
        console.log("비용이 큰 계산");
        return n*2;
    }
    const result = useMemo(()=>calculate(num),[num]);
    return <div> 결과 : {result}</div>;
}

export default ExpensiveCalculation;