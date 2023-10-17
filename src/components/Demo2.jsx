import { useRef, useState } from "react";

const Demo2=()=>
{
    let x=0;
    const y=useRef(0);
    const [state, setState]=useState(0);
    return(
        <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
            <div>
                <button onClick={()=>{x=x+1; console.log(x)}} className="bg-green-50 px-2 m-4 border border-b-amber-200">Increment</button>
                <h1 className="font-bold text-xl">Let variable: {x}</h1>
            </div>
            <div>
                <button onClick={()=>{setState(state+1); console.log(state)}} className="bg-green-50 px-2 m-4 border border-b-amber-200">Increment</button>
                <h1 className="font-bold text-xl">State variable: {state}</h1>
            </div>
            <div>
                <button onClick={()=>{y.current=y.current+1; console.log(y.current)}} className="bg-green-50 px-2 m-4 border border-b-amber-200">Increment</button>
                <h1 className="font-bold text-xl">useRef variable: {y.current}</h1>
            </div>
        </div>
    )
}

export default Demo2;