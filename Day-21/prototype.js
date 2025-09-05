function Student(name, id) {
  this.name = name;
  this.id = id;
//   this.introMySelf = function () {
//     console.log(`${this.name} ${this.id}`);
//   };
}

Student.prototype.introMySelf = function () {
  console.log(`My name is ${this.name} and my I'D is ${this.id}`);
};

let s1 = new Student("Vignesh", 141);
let s2 = new Student("Gopal", 186);

console.log(s1);
console.log(s2);

s1.introMySelf();
s2.introMySelf();
