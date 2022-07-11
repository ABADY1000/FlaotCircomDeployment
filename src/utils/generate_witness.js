// import {builder} from "./witness_calculator";
const wc = require("./witness_calculator");


export async function generateWitness (file, input) {
	console.log(`wc:${wc}`);
	const response = await fetch(file);
	console.log(response);
	const buffer = await response.arrayBuffer();
	//console.log(buffer);
	let buff;

	await wc.builder(buffer).then(async witnessCalculator => {
		buff = await witnessCalculator.calculateWTNSBin(input, 0);
	});

	return buff;
}
