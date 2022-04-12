// Only change code below this line
function myArr(mili) {
"use strict";
return{mili}
}
// Using mili = [4, 10, 25] would be invalid
const milili = [10, 25, 4];
milili[0] = 4;
milili[1] = 10;
milili[2] = 25;
console.log(myArr(milili));
// Only change code above this line
module.exports = myArr;