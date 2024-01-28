/*
*/
const markHeight = '1.69';
const johnHeight = '1.95';
////////////////////////////
const markMass = 78;
const johnMass = 92;

////////////////////
const markBMI = Math.round(markMass / markHeight **2);
const johnBMI = Math.round(johnMass / (johnHeight **2));

/////////////////////////////////
const markHigherBMI =markBMI > johnBMI;



const name = "Sansa Zainab Temitope"
const job = "Chemist"

//CONCATENATION
console.log('My name is ' + myName + ' , and I work as a' + job);

//TEMPLATE LITERALS
console.log('My name is ${name}, and i work as a ${job}')
