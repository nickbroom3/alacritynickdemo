class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}

/*var alice = new Person("Alice", 20);
var bob = new Person("Bob", 25);
var carol = new Person("Carol", 30);
var dave = new Person("Dave", 35); 

var people = [alice, bob, carol, dave];*/

var names =["Alice", "Bob", "Carol", "Dave"];
var ages = [20, 25, 30, 35];
var people = [];

for(i = 0; i < names.length; i ++){
    var person = new Person(names[i], ages[i]);
    people.push(person);
}

function calcAverageAge(){
    var totalAge = 0;
    for(age of ages){
        totalAge += age;
    }
    avgAge = totalAge / ages.length;
    return avgAge;
}

function getPersonByAge(age){
    for(person of people){
        if(person['age'] == age){
            return person;
        }
    }
    console.log("Error person not found");
    return
}

$( document ).ready(function() {
    var maxAge = Math.max.apply(null, ages);
    var oldestPerson = getPersonByAge(maxAge);
    var minAge = Math.min.apply(null, ages);
    var youngestPerson = getPersonByAge(minAge);
    var avgAge = calcAverageAge();
    
    document.getElementById("meanAge").innerHTML = "The average age is: " + avgAge;
    document.getElementById("oldPerson").innerHTML = "The oldest person is: " + oldestPerson['name'] + " who is " + oldestPerson['age'] + " years old.";
    document.getElementById("youngPerson").innerHTML = "The youngest person is: " + youngestPerson['name'] + " who is " + youngestPerson['age'] + " years old.";
});













