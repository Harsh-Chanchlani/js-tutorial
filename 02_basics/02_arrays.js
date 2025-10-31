let marvel_heros = ["Ironman", "Spiderman", "Thor"];
let dc_heros = ['Batman', 'Superman', 'Flash'];

marvel_heros.push(dc_heros); // it will add the whole array as a single element in the marvel_heros array
// console.log(marvel_heros);

const all_new_heros = marvel_heros.concat(dc_heros) // it will add the elements of dc_heros array to the marvel_heros array
// console.log(all_new_heros);

const all_new_heros2 = [...marvel_heros, ...dc_heros] // it will add the elements of dc_heros array to the marvel_heros array using spread operator
// console.log(all_new_heros2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it will flatten the array to single level
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))// retuens boolean if the given variabel is an array object or not
console.log(Array.from("Hitesh"))//creates an array from an iterable object
console.log(Array.from({name: "hitesh"})) // will give empty array as object is not iterable we can specify the keys or the values to convert it into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments

