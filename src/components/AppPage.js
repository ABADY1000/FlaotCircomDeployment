import React, { useEffect, useState } from "react";
import OperationsPage from "./OperationsPage";
import Operations from "../utils/Enum";
import { generateCalldata } from "../utils/generate_calldata";
import {Number2Float32Bytes, Float32Bytes2Number} from "../utils/float-circom";
// import { groth16 } from "snarkjs";

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

    // useEffect(async ()=>{
    //     const c1 = Number2Float32Bytes(f1);
    //     const c2 = Number2Float32Bytes(f2);
    //     console.log(c1);
    //     console.log(c2);
    //     const r = await generateCalldata({"f1": c1, "f2": c2});
    //     console.log(`R: ${r}`);
    // }, [add]);

    const handleInput = async (_f1, _f2, _f3, op)=>{
        // setF1(Number(_f1));
        // setF2(Number(_f2));
        const f1 = Number(_f1);
        const f2 = Number(_f2);
        const f3 = Number(_f3);
        const c1 = Number2Float32Bytes(f1);
        const c2 = Number2Float32Bytes(f2);
        const c3 = Number2Float32Bytes(f3);
        let r;
        switch (op) {
            case Operations.ADD:

                // Circom-Wasm works here...
                r = await generateCalldata("./wasm/add.wasm",  {"f1": c1, "f2": c2});
                console.log(`R:${r}`);
                setAdd(Float32Bytes2Number(r));

                break;
            case Operations.MUL:
                r = await generateCalldata("./wasm/multiply.wasm",  {"f1": c1, "f2": c2});
                setMul(Float32Bytes2Number(r));
                break;
            case Operations.GREATER:
                r = await generateCalldata("./wasm/GreaterThan.wasm",  {"f1": c1, "f2": c2});
                setGth(Number(r));
                break;
            case Operations.LESS:
                r = await generateCalldata("./wasm/LessThan.wasm",  {"f1": c1, "f2": c2});
                setLth(Number(r));
                break;
            case Operations.ERROREQ:
                r = await generateCalldata("./wasm/isEqualError.wasm",  {"f1": c1, "f2": c2});
                setEq(r);
                break;
            case Operations.INRANGE:
                r = await generateCalldata("./wasm/inRange.wasm",  {"f": c2, "ULimit": c3, "LLimit": c1});
                // setRng(f1 > f2 && f1 < f3);
                console.log(r);
                setRng(Number(r));
                break;
            case Operations.NEG:
                r = await generateCalldata("./wasm/negate.wasm",  {"f": c2});
                setNeg(Float32Bytes2Number(r));
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