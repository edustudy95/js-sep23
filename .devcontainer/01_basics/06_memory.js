//  Stack (Primitive) and Heap (Non-primitive) Memory


//Stack (Primitive) Example

let myName ="RajanGupta"
let anotherName = "myName"
anotherName = "RajanKumarGupta"

// console.log(myName);
// console.log(anotherName);


//Example 2
let myMarks = 123
let anotherMarks = myMarks
anotherMarks = 4321

// console.log(myMarks);
// console.log(anotherMarks);

/*  In Stack memory we get the copy of aything not the original one. */


//Heap (Non-primitive) Example

let useOne = {
    name  : "rajan",
    email : "rajan@google.com",
    marks : 1234
}

let userTwo = useOne;

userTwo.email = "user@google.com"

// console.log(useOne);
// console.log(useOne.email);
// console.log(userTwo.email);

//Example 2

let bikeOne = {
    brand : "Tvs",
    mrp : 70000,
    color : "red"
}

let bikeTwo = bikeOne

bikeTwo.color = "white"

console.log(bikeOne);
console.log(bikeTwo);

/*  In Heap memory we get the original  reference one not the copy of aything. */
