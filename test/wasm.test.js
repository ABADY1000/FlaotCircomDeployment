const { assert } = require("chai");
// import {WitnessCalculator, builder} from "../src/utils/witness_calculator";
const {readFileSync} = require("fs");
const {readFile} = require("node:fs/promises");
const wc = require("../src/utils/witness_calculator");
const {Number2Float32Bytes} = require("../src/utils/float-circom");

describe("Testing Wasm running", ()=> {
    
    function printSharedRWMemory () {
        const shared_rw_memory_size = instance.exports.getFieldNumLen32();
        const arr = new Uint32Array(shared_rw_memory_size);
        for (let j=0; j<shared_rw_memory_size; j++) {
            arr[shared_rw_memory_size-1-j] = instance.exports.readSharedRWMemory(j);
        }
        console.log(fromArray32(arr));
    }

    // let compiledWasm;
    it("Fetch WASM and Compile it", async ()=>{
        // const file = await fetch("../public/add.wasm");
        const file = readFileSync("./public/add.wasm");

        // const buffer = await file.arrayBuffer();
        let compiledWasm = await WebAssembly.compile(file);
    });

    it("Instantiate and run", async ()=>{

        // const file = await readFile("./src/utils/wasm/add.wasm");
        // console.log(file);
        let compiledWasm; // = await WebAssembly.compile(await readFile("./src/utils/wasm/add.wasm"));
        try {
            compiledWasm = await WebAssembly.compileStreaming(await readFile("./src/utils/wasm/add.wasm"));
        } catch (error) {
            console.log("ERROR");
        }
        console.log(Object.values(compiledWasm));

        const instance = await WebAssembly.instantiate(compiledWasm, {
            runtime: {
                exceptionHandler : function(code) {
                    let errStr;
                    if (code === 1) {
                        errStr= "Signal not found. ";
                    } else if (code === 2) {
                        errStr= "Too many signals set. ";
                    } else if (code === 3) {
                        errStr= "Signal already set. ";
                    } else if (code === 4) {
                        errStr= "Assert Failed. ";
                    } else if (code === 5) {
                        errStr= "Not enough memory. ";
                    } else {
                        errStr= "Unknown error\n";
                    }
                    // get error message from wasm
                    errStr += getMessage();
                    throw new Error(errStr);
                },
                showSharedRWMemory: function() {
                    printSharedRWMemory ();
                }
            }
        });
        console.log(instance);

        const w = new wc.WitnessCalculator(instance, {});

        const c1 = Number2Float32Bytes(32);
        const c2 = Number2Float32Bytes(33.3);
        const witness = await w.calculateWTNSBin({"f1": c1, "f2": c2}, {});
        console.log(witness);
        if(witness != undefined){
            assert(true);
        }
        else{
            assert(false);
        }

    });
});