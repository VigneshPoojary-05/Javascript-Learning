// let date = new Date();
// console.log(date.toLocaleString())

let Student = {
  name: "vignesh",
  age: 19,
  car: "BMW",
  introMySelf: function () {
    console.log(
      ` My name is ${this.name}, my age is ${this.age}, my car is ${this.car} `
    );
  },
};
Student.introMySelf();

