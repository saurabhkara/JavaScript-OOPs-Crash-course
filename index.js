console.log('Jai Shree Krishna');

//OOPs(Object Oriented programming) is paradigm based on the concept of objects
//Objects are model (describe ) real world or abstract features
//In OOPs, objects are self contained
//Objects are basic building 

//Intraction happen through a public interface(API):methods that the code outside of the object can access and use 
//to communicate with the object.

//Goal of OOPs concepts is, organise code, to make it more flexiable and easier to maintain.


//========================================================================================
//Class - Blueprint from which we can create new objects
//Object - Real world entity i.e.. class instance

//================================================================
//The 4 fundamental principles of object oriented programming
//1. Abstraction
//2. Encapsulation
//3. Interfaces 
//4. Polymorphism

//=========================================================================
//Abstraction - Hiding details that don't matter
//Encapsulation - Binding properties and methods together
//Inheritence- Extending parents class properties to child class (follows DRY principle)
//Polymorphism - Poly means many and morphism means form(shape)

//============================================================================
//JavaScript OOPs using prototype
//Objects are linked to a prototype object.

//3 ways of implementing prototypal inheritance in javascript
//1. Construtor functions
//2. ES6
//3. Object.create()

//===================================================

//function declaration
// function sum(a, b) {
//     return a + b;
// }

//function expression
// let sum = function(a, b) {
//     return a + b;
// };

//=======================================================

//constructor function 
const Person = function(firstName,birthYear){
    console.log(this)
    this.firstName= firstName;
    this.birthYear= birthYear;
}

const person1 = new Person('saurabh',1998);
console.log(person1)
//1. new {} is created 
//2. function is called , this={}
//3. linked to prototype
//4. function automatically return ()

console.log(person1 instanceof Person);

console.log(Person.prototype)

Person.prototype.calcAge= function (){
    console.log(2023-this.birthYear)
}

// person1.calcAge()
// console.log(Person.__proto__.__proto__)
// console.log(Person.prototype === person1.__proto__);

// console.log(Array.__proto__);
// console.log(Object.__proto__);
// console.log(Function.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__);

function Car(make,speed){
    this.speed= speed;
    this.make= make;
}
Car.prototype.accelerate=function(){
    this.speed = this.speed+10;
    console.log(this.speed);
    return this.speed;
}   
Car.prototype.break= function(){
    this.speed= this.speed -5;
    console.log(this.speed);
    return this.speed;
}

// const car1 = new Car('BMW',120);
// const car2 = new Car('Merced',85);

// console.log(car1)
// console.log(car1.accelerate())
// console.log(car2)
// console.log(car2.break())

//==========================================================
//In javascript classes are special type of functions 
//class expression
// const Pers = class { }
//------------------------
// class declaration
class PersonC {

    constructor(firstName, age){
        this.firstName= firstName;
        this.age=age;
    }
    
    calcYear(){
        console.log(2023-this.age);
    }

    get getAge(){
        console.log(this.age);
        return this.age
    }

    set(num){
        this.age =num
    }
}

const jessica = new PersonC('jessica',25);
PersonC.prototype.greet=function(){
    console.log(this.firstName, "Hello !!!")
}
// console.log(jessica.calcYear());
// console.log(jessica.greet());
// console.log(jessica.set(50));
// console.log(jessica.getAge);

//Classes are not hoisted 
//Classes are also  first class citizen
//classes are being run in strict mode.


//=======================================
//Getter and setter in javascript

const accounts ={
    owner:"Jones",
    movement:[100,200,300,400],

    get latest (){
       return this.movement.slice(-1).pop()
    },
    set latest(num){
        this.movement.push(num);
        return this.movement;
    }
}

// console.log(accounts.latest)
// console.log(accounts.latest=800)
// console.log(accounts.movement)

//==========================
//Static method
//Static methods available on object constructor , not on its prototype

function Hello(name){
    this.name=name;
}

const h1 = new Hello('Saurabh');
Hello.prototype.printName= function(){
    console.log(this.name);
}

Hello.Hey= function(){   //this will available on Hello, not its prototype
    console.log(`hey ${this.name}`);
}

h1.printName();
Hello.Hey('Radhe Shyam');


class HelloC{

    constructor(name){
        this.name=name;
    }

    printName(){
        console.log(`name: ${this.name}`)
    }
    static hey(){
        console.log('Hey there !!!');
    }


}

const h2 = new  HelloC('Saurabh from Class');
h2.printName();

HelloC.hey();

