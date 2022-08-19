// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function () {
//   return "vroom";
// };

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function () {
//   return "beep";
// };

// const car = new Car({ title: "Focus" });
// car.drive();
// car;

// const toyota = new Toyota({ color: "red", title: "Daily Driver" });
// toyota;
// toyota.drive();
// toyota.honk();

class Car {
  // constructor(options) {
  //	this.title = options.title
  // }

  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }
}

const car = new Car({ title: "Toyota" });
car;
car.drive();

class Car {
  // constructor(options) {
  //	this.title = options.title
  // }

  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }
}

const car = new Car({ title: "Toyota" });
car;
car.drive();

class Toyota extends Car {
  constructor(options) {
    super(options); // like calling Car.constructor()
    this.color = options.color;
    this.title = options.title;
  }

  honk() {
    return "beep";
  }
}

const toyota = new Toyota({ color: "red", title: "Title" });
toyota;
toyota.honk();
