// splice adiciona um elemento no meio do array
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999); // adiciona elemento 

console.log(arr);

arr.splice(4, 1); //remove elemento

console.log(arr);

// indexOf

console.log(arr.indexOf(5));


// join transforma um array em striing
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));


// reverse inverte um  array
console.log(arr2.reverse());