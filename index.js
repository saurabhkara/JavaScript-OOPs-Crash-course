console.log("Jai Shree Krishna");

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
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const person1 = new Person("saurabh", 1998);
console.log(person1);
//1. new {} is created
//2. function is called , this={}
//3. linked to prototype
//4. function automatically return ()

console.log(person1 instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// person1.calcAge()
// console.log(Person.__proto__.__proto__)
// console.log(Person.prototype === person1.__proto__);

// console.log(Array.__proto__);
// console.log(Object.__proto__);
// console.log(Function.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__);

function Car(make, speed) {
  this.speed = speed;
  this.make = make;
}
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
  return this.speed;
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
  return this.speed;
};

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
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  calcYear() {
    console.log(2023 - this.age);
  }

  get getAge() {
    console.log(this.age);
    return this.age;
  }

  set(num) {
    this.age = num;
  }
}

const jessica = new PersonC("jessica", 25);
PersonC.prototype.greet = function () {
  console.log(this.firstName, "Hello !!!");
};
// console.log(jessica.calcYear());
// console.log(jessica.greet());
// console.log(jessica.set(50));
// console.log(jessica.getAge);

//Classes are not hoisted
//Classes are also  first class citizen
//classes are being run in strict mode.

//=======================================
//Getter and setter in javascript

const accounts = {
  owner: "Jones",
  movement: [100, 200, 300, 400],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(num) {
    this.movement.push(num);
    return this.movement;
  },
};

// console.log(accounts.latest)
// console.log(accounts.latest=800)
// console.log(accounts.movement)

//==========================
//Static method
//Static methods available on object constructor , not on its prototype

function Hello(name) {
  this.name = name;
}

const h1 = new Hello("Saurabh");
Hello.prototype.printName = function () {
  console.log(this.name);
};

Hello.Hey = function () {
  //this will available on Hello, not its prototype
  console.log(`hey ${this.name}`);
};

h1.printName();
Hello.Hey("Radhe Shyam");

class HelloC {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`name: ${this.name}`);
  }
  static hey() {
    console.log("Hey there !!!");
  }
}

const h2 = new HelloC("Saurabh from Class");
h2.printName();

HelloC.hey();

//=================================================
//Object.create()
//we can also create prototype in object constructor by object.create() method
const personProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const pp = Object.create(personProto);
// console.log(pp);
// pp.name='Saurabh';
// pp.birthYear=1997
// console.log(pp);
// pp.calcAge();

// console.log(pp.__proto__ ===personProto);

////////////// Coding challenge 2 ////////////////////////

class CarC {
  constructor(speed, brand) {
    this.speed = speed;
    this.brand = brand;
  }

  accelerate() {
    this.speed = this.speed + 10;
  }
  get getSpeed() {
    console.log(`Speed of car is ${this.speed / 1.6} in US`);
  }

  set(speed) {
    this.speed = speed;
    console.log("Speed has been increased");
  }
}

const c2 = new CarC(110, "BMW");
console.log(c2.getSpeed);
console.log(c2.set(150));

//====================================================
//Inheritance between classes -----------------------

function Humans(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Humans.prototype.calcAge = function () {
  console.log(`Age : ${2023 - this.birthYear}`);
};

const human = new Humans("Saurabh", 1998);
// console.log(human);
// human.calcAge();

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Humans.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Humans.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} pursing ${this.course}`);
};

Student.prototype.constructor = Student;

const mike = new Student("Mike", 1998, "Computer Science");
console.log(mike instanceof Student);
console.log(mike instanceof Humans);
console.log(mike);
// console.log(mike.introduce());
// console.log(mike.calcAge());
// console.log(mike.__proto__);

//-------------------------------------------------------------
//Code challenge 3

function Car3(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}

Car3.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.chargeTo = this.chargeTo - 1;
  console.log(
    `Speed of car increased to ${this.speed} and charged decreased ${this.chargeTo}`
  );
};

Car3.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(`Speed of car decreased to ${this.speed}`);
};

function EV(brand, speed, chargeTo) {
  this.chargeTo = chargeTo;
  Car3.call(this, brand, speed);
}

EV.prototype = Object.create(Car3.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.chargeTo = chargeTo;
  console.log("Car of battery charged to", this.chargeTo);
};

// const tesla = new EV('Tesla',120,50);
// console.log(tesla);
// tesla.chargeBattery(80)

//-----------------------------------------------------------------
//ES6 Inheritence

class PersonCl {
  constructor(firstName, dob) {
    this.firstName = firstName;
    this.dob = dob;
  }

  printName() {
    console.log("Name of Person is ", this.firstName);
  }
}

class StudentCL extends PersonCl {
  constructor(firstName, dob, course) {
    super(firstName, dob);
    this.course = course;
  }
}

const martha = new StudentCL("martha", 1998, "Computer Science");
console.log(martha);
// martha.printName()

//==============================================================
//Inheritence by object.create()

const PersonO = {
  calcAge() {
    console.log(`Current age is ${2023 - this.dob}`);
  },
  init(firstName, dob) {
    this.firstName = firstName;
    this.dob = dob;
    console.log("Init method called");
  },
};

const steven = Object.create(PersonO);
const StudentProto = Object.create(PersonO);
StudentProto.init = function (firstName, dob, course) {
  PersonO.init.call(this, firstName, dob);
  this.course = course;
};

const jay = Object.create(StudentProto);
// console.log(jay.init());

//===============================================================================
//ES6 Classes  and Encapsulation - Protected Properties and Methods(Data privacy);


//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods

class BankAccount {
    //public fields
    _locale = navigator.language;
    //Private fields
    #movement = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    console.log("Thanks for opening Acount");
  }

  //public interface (public methods)
  deposite(val) {
    this.#movement.push(val);
  }

  withDraw(val) {
    this.#movement.push(-val);
  }

  requestLoan(value) {
    if (this.#aprroveLoan(value)) {
      this.deposite(value);
      console.log("Loan Aprroved");
    }
  }

  //private methods
  #aprroveLoan(value) {
    return true;
  }
  
 
}

const acc1 = new BankAccount("Saurabh", "INR", 802301);
// acc1.#movement.push(5000)
console.log(acc1);

//chaining in oops
