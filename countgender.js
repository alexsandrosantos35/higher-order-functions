const data = require("./database");

//Contar a quantidade de personagens atravéz do sexo.

function countGender(gender) {
if(gender === "F" || gender === "M") {
return data.characters.filter((charater) => charater.gender === gender).length;
}
else {console.log("Valor inválido!");}
}

console.log(countGender("M"));