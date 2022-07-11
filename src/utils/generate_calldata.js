/* global BigInt */

import { generateWitness } from './generate_witness';
import {Float32Bytes2Number, Number2Float32Bytes} from "./float-circom";
import bigInt from "big-integer";
// import { groth16 } from 'snarkjs';

// import { F1Field, Scalar} from  "ffjavascript"; 
// const Fr = new F1Field(Scalar.fromString("21888242871839275222246405745257275088548364400416034343698204186575808495617"));

function returnData(array){
    const start = 108;
    const len = 4;
    let buffer = [];
    for(let i=0; i<len; i++){
        buffer.push(array[start+len-1-i].toString(16).padStart(2,0));
    }
    let hex = `0x${buffer.join('')}`;
    // console.log(hex);
    hex = BigInt(hex);
    // console.log(hex);
    return hex;
}

export async function generateCalldata(file, input) {

    let generateWitnessSuccess = true;

    let formattedInput = {};
    
    for (var key in input) {
        // formattedInput[key] = Fr.e(input[key]);
        formattedInput[key] = input[key];
    }

    let witness = await generateWitness(file, formattedInput).then()
        .catch((error) => {
            console.error(error);
            generateWitnessSuccess = false;
        });
    
    //console.log(witness);

    if (!generateWitnessSuccess) { return; }

    // const { proof, publicSignals } = await groth16.prove('circuit_final.zkey', witness);
    
    // const calldata = await groth16.exportSolidityCallData(proof, publicSignals);

    // const argv = calldata.replace(/["[\]\s]/g, "").split(',').map(x => BigInt(x).toString());

    // //console.log(argv);

    // const a = [argv[0], argv[1]];
    // const b = [[argv[2], argv[3]], [argv[4], argv[5]]];
    // const c = [argv[6], argv[7]];
    // const Input = argv.slice(8);

    // return [a, b, c, Input];


    return returnData(witness);
}