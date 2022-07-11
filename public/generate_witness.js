const wc  = require("./witness_calculator.js");
const { readFileSync, writeFile } = require("fs");

function witgen(){
	let buff;
	if (false) {
		console.log("Usage: node generate_witness.js <file.wasm> <input.json> <output.wtns>");
	} else {
		const input = JSON.parse(readFileSync("./input.json", "utf8"));
		
		const buffer = readFileSync("./add.wasm");
		wc(buffer).then(async witnessCalculator => {
			buff= await witnessCalculator.calculateWTNSBin(input,0);
		});

	}
	return buff;
}

console.log(witgen());