
cp "../floatCircom/circuits/add/add_js/add.wasm"                             "./public/wasm/add.wasm"
# cp "../floatCircom/circuits/add/add_js/generate_witness.js"                  "./src/utils/generate_witness.js"
# cp "../floatCircom/circuits/add/add_js/witness_calculator.js"                "./src/utils/witness_calculator.js"

cp "../floatCircom/circuits/multiply/multiply_js/multiply.wasm"              "./public/wasm/multiply.wasm"
cp "../floatCircom/circuits/negate/negate_js/negate.wasm"                    "./public/wasm/negate.wasm"
cp "../floatCircom/circuits/GreaterThan/GreaterThan_js/GreaterThan.wasm"     "./public/wasm/GreaterThan.wasm"
cp "../floatCircom/circuits/LessThan/LessThan_js/LessThan.wasm"              "./public/wasm/LessThan.wasm"
cp "../floatCircom/circuits/i2f/i2f_js/i2f.wasm"                             "./public/wasm/i2f.wasm"
cp "../floatCircom/circuits/inRange/inRange_js/inRange.wasm"                 "./public/wasm/inRange.wasm"
cp "../floatCircom/circuits/isEqualError/isEqualError_js/isEqualError.wasm"  "./public/wasm/isEqualError.wasm"
cp "../floatCircom/circuits/isEqualExact/isEqualExact_js/isEqualExact.wasm"  "./public/wasm/isEqualExact.wasm"


echo "All wasm files copied successfully"

