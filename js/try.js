let person={
    name:"chano",
    lastname:"arnuco",
    age:20,
    hobbies:["music","games","programming"],

    pets:{
        0:{
            name:"michi",
            type:"cat"
        },
        1:{
            name:"kyomi",
            type:"dog"
        }
    }
};


console.log("name: ", person.name);
console.log("hobbies: ", person.hobbies);
console.log("first hobby: ", person.hobbies[0]);

console.log("\nMy Pet:");
console.log("name: ", person.pets[1].name);
console.log("type: ", person.pets[1].type);

