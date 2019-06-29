// function Circlr() {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw");
//   };
// }

// write in ES6

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.mov = function() {
      console.log("mov");
    };
  }
  draw() {
    console.log("draw");
  }
}
const c = new Circle(2);
console.log(c);
//if we want to be function object instance not prototype we define it in constructor

// =====>> Hosting <<======
//Two kind of define function

//Function Declaration
function say() {} // call any where

//Function Expression
const good = function() {}; //we cant call it above this line

//and class
class moh {} //we cant call it above this line
const we = class {}; //we cant call it above this line

// ======>> Static Method <<========

class Dash {
  constructor(radius) {
    this.radius = radius;
  }

  //instance method special for dash
  draw() {} //
  //static method
  static parse(str) {
    //if we say
    const radius = JSON.parse(str).radius;
    return new Dash(radius);
  } //this isn't show in __proto__ but we can use it by Dash.parse
}
const dash = Dash.parse('{"radius":1}');
console.log(dash);
//To clear static function in class:-
/*
class Math {
  static abs(v) {
    //...
  }
}

Math.abs(); //to be easily like function take sth and return sth
*/

// ====>> the this keyword <<====
// to clear use it we will print it in console :)
const Circle1 = function() {
  this.draw = function() {
    console.log(this);
  };
};

const c1 = new Circle1();
//Method Call part of object
c1.draw();

const draw = c1.draw; // we dont run function we get reference
//Function call not part of object
draw();

// ===> How to insert privet property in method in ES6 <<========
// 1- use symbol()
const _no = Symbol(); // we call symbol to to generate it
const _meth = Symbol();
//if we say :-
console.log(Symbol() === Symbol());
// we get false because every once we call it we get a new unicc value
class Dodo {
  constructor(no) {
    this[_no] = no; //privet property
  }

  //privet method
  [_meth]() {}
}
const d = new Dodo(1);
console.log(d); // we get Dodo {Symbol(): 1} privet
console.log(Object.getOwnPropertyNames(d));
console.log(Object.getOwnPropertySymbols(d));
//but if we say kind of hacker :)
const key = Object.getOwnPropertySymbols(d)[0];
console.log(d[key]); //we get value :)

//2- use weekMaps
const _weak = new WeakMap();
const _mov = new WeakMap();
class ItWeak {
  constructor(weak) {
    _weak.set(this, weak);
    _mov.set(this, function() {
      //privet method
      console.log("mov");
    });
  }
  dd() {
    console.log(_weak.get(this));
  }
}
const w = new ItWeak(1);
console.log(w); //we get ItWeak {}
// => __proto__: Object

//but we can get this privet value by get and we need it name
w.dd();

// ========>>> getter and setter <<<=============

const _we = new WeakMap();

class Wee {
  constructor(we) {
    _we.set(this, we);
  }
  get we() {
    return _we.get(this);
  }
  set we(value) {
    if (value <= 0) throw new Error("invalid value sorry");
    _we.set(this, value);
  }
}

let weeee = new Wee(1);

// =========>>> Inheritance <<<============

class Shape10 {
  constructor(color10) {
    this.color10 = color10;
  }
  mov10() {
    console.log("mov");
  }
}
class Circle10 extends Shape10 {
  constructor(color10, radius10) {
    super(color10);
    this.radius10 = radius10;
  }
  draw10() {
    console.log("draw");
  }
}

const c10 = new Circle10("red", 1);
console.log(c10);

// if we have color to shape and want to inharent it to circle in constructor we must use super like above

//===========>>> Overriding method <<<==============
class Shape11 {
  mov() {
    console.log("moving");
  }
}
class Circle11 extends Shape11 {
  mov() {
    console.log("moving from circle");
    //we can accice mov method in up
    super.mov();
  }
}

const c11 = new Circle11();
console.log(c11.mov());
