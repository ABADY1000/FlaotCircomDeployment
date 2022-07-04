import React, { useEffect, useState } from "react";
import OperationsPage from "./OperationsPage";
import Operations from "../utils/Enum";

import "./css/app-page.css";

function AppPage(){
    
    // const [f1, setF1] = useState(0);
    // const [f2, setF2] = useState(0);
    const [f3, setF3] = useState(0);
    const [add, setAdd]   = useState(0);
    const [mul, setMul]   = useState(0);
    const [gth, setGth]   = useState(0);
    const [lth, setLth]   = useState(0);
    const [neg, setNeg]   = useState(0);
    const [rng, setRng]   = useState(0);
    const [eq, setEq]   = useState(0);

    const [op, setOp] = useState("")


    const handleInput = (_f1, _f2, op)=>{
        // setF1(Number(_f1));
        // setF2(Number(_f2));
        const f1 = Number(_f1);
        const f2 = Number(_f2);
        switch (op) {
            case Operations.ADD:
                setAdd(f1+f2);
                break;
            case Operations.MUL:
                setMul(f1*f2);
                break;
            case Operations.GREATER:
                setGth(f1>f2);
                break;
            case Operations.LESS:
                setLth(f1<f2);
                break;
            case Operations.ERROREQ:
                setEq(f1==(f2+f1*0.05) || f1==(f2-f1*0.05));
                break;
            case Operations.INRANGE:
                setRng(f1 > f2 && f1 < f3);
                break;
            case Operations.NEG:
                setNeg(-f1);
                break;
            default:
                setAdd(f1+f2);
                console.log("Error in switch: no choice was given");
                break;
        }

        // console.log(`AppPage: ${o}`);
    };

    function handleClick(){
        // setO();
        // WebAssembly.
    }

    const results = {
        add:add,
        mul:mul,
        gth:gth,
        lth:lth,
        eq:eq,
        rng:rng,
        neg:neg
        };
    return <div className="main-page">
        <OperationsPage callback={handleInput} results={results}/>
    </div>;
}

export default AppPage;
// module.exports = AppPage;