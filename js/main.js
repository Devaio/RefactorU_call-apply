var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

var personList = [person1, person3];

var sayHello = function() {
 alert('Hello, ' + this.firstName);
};

var greetOneAnother = function(personA, personB) {
 alert("{0}, meet {1} and {2}".supplant([this.firstName, personA.firstName, personB.firstName]));
};

//without context
// sayHello()  

//with context
// sayHello.call(person2)

//apply
// greetOneAnother.apply(person2, [person1, person3])

//Buttons





$('button').on("click", buttonClick = function () {
	console.log($(this).text() + " was clicked!")
});

buttonClick() //reports ' was clicked!' without any button specified

buttonClick.call($('#btn1')) //reports correct button - button 1