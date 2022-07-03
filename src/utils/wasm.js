// import readFile from "node:fs/promises"
// import fs from "fs";
const fs = require("fs");
const path = require("path");


async function main() {

    const p = path.resolve("../floatCircom/circuits/multiply/multiply_js/multiply.wasm");
    console.log(p);

    const source = fs.readFileSync("../floatCircom/circuits/multiply/multiply_js/multiply.wasm");
    const typedArray = new Uint8Array(source);
    // const wasm = WebAssembly.compile(
    //     await readFile(
    //         new URL("../../../floatCircom/circuits/multiply/multiply_js/multiply.wasm", import.meta.url)
    //     )
    // );

    const env = {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({
            initial: 256
        }),
        table: new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc'
        })
    }

    WebAssembly.instantiate(typedArray, {
        env: env
    }).then(result => {
        console.log(util.inspect(result, true, 0));
        console.log(result.instance.exports._add(9, 9));
    }).catch(e => {
        // error caught
        console.log(e);
    });

    
}

main().
then(console.log("OK")).
catch((err)=>console.log(err));