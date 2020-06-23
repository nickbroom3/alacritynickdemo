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
    console.log(ages);
    console.log(totalAge);
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

function addPerson(){
    var personName = document.getElementById("name").value;
    var personAge = parseInt(document.getElementById("age").value);
    var newPerson = new Person(personName, personAge);
    people.push(newPerson);
    ages.push(personAge);
    names.push(personName);
    console.log(people);
    calculatePersonData();
    displayEmployeeDetails();
}

function calculatePersonData(){
    var maxAge = Math.max.apply(null, ages);
    var oldestPerson = getPersonByAge(maxAge);
    var minAge = Math.min.apply(null, ages);
    var youngestPerson = getPersonByAge(minAge);
    var avgAge = calcAverageAge();

    document.getElementById("meanAge").innerHTML = "The average age is: " + avgAge;
    document.getElementById("oldPerson").innerHTML = "The oldest person is: " + oldestPerson['name'] + " who is " + oldestPerson['age'] + " years old.";
    document.getElementById("youngPerson").innerHTML = "The youngest person is: " + youngestPerson['name'] + " who is " + youngestPerson['age'] + " years old.";

}

function displayEmployeeDetails(){
    document.getElementById("employeeDetails").innerHTML = "";
    for(person of people){
        document.getElementById("employeeDetails").innerHTML += "<p> Name: " + person['name'] + ". Age: " + person['age'] + "</p>" ;
    }
}

$( document ).ready(function() {
    displayEmployeeDetails();
    calculatePersonData();
});













