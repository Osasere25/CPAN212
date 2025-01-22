 const math = require("./math");

 const {addition, division, multiplication, subtraction} = require("./math");

 console.log(math.addition(1,1) + "\tAddition From Math Object");
 console.log(math.subtraction(2,1) + "\tSubtraction From Math Object");
 console.log(math.multiplication(9,9) + "\tMultiplication From Math Object");

 console.log(addition (9,9) + "\tAddition From Function");
