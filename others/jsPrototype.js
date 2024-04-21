function Animal(name) {
    this.name = name;
}
// Adding a method to the Animal prototype
Animal.prototype.sayName = function() {
console.log("My name is " + this.name);
};

// Creating an instance of Animal
let myAnimal = new Animal("Fido");

// Calling the method from the prototype
myAnimal.sayName(); // Output: My name is Fido

function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}


var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);


  
var person1 = new Person("Tammi", "Smith", 32, "neutral", [
    "music",
    "skiing",
    "kickboxing",
]);
  
Person.prototype.farewell = function () {
    alert(this.name.first + " has left the building. Bye for now!");
};
  
console.log(Person.prototype)
console.log(Object.prototype)
console.log(person1)
var person2 = Object.create(person1);
console.log(person2.__proto__)
console.log(person2)