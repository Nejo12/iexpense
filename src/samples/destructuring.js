//
// Object Destructuring
//

// const person = {
//     name: "Gabriel",
//     age: 30,
//     location: {
//         city: "Berlin",
//         temp: 80
//     }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age} years old? No Way!!`);
// const { city, temp } = person.location;
// console.log(`It is ${temp} in ${city}`);

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: " Penguin"
//     }
// };
//
// const { name: publisherName = "Self published" } = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ["HansaStraße", "13088", "Weissensee", "Berlin", "Germany"];
const [, , bezirk, city, country] = address;
console.log(`You are in ${city}, ${country}.`);
