let date = new Date();
console.log(date.toLocaleString())


//  #1 Object Literals 

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


//  #2 Factory Function 

function Student(name, age, car) {
  return {
    name: name,
    age: age,
    car: car,
    introMySelf: function () {
      console.log(
        ` My name is ${this.name}, my age is ${this.age}, my car is ${this.car} `
      );
    },
  };
}

let res = Student("Vignesh", 19, "Audi");
let res1 = Student("Gopal", 51, "BMW");
let res2 = Student("Yashoda", 45, "Ferrari");

console.log(res);
console.log(res1);
console.log(res2);

res.introMySelf();
res1.introMySelf();
res2.introMySelf();


// #3 Constructor Function 

function Student(name, age, car){
    this.name=name;
    this.age=age;
    this.car=car
    return this
}
let s1 = new Student("Vignesh",19,"BMW")
let s2 = new Student("Yashoda",49,"Ferrari")
console.log(s1)
console.log(s2)


// #4 Class Syntax(ES6)

class Student{
    constructor(name='Ram',age=48,car='Swift'){
        this.name=name;
        this.age=age;
        this.car=car;
    }
    intro(){
        console.log(this.name,this.age,this.car)
    }

   
}
let stud1 = new Student('Vignesh',19,'Tesla');
let stud2 = new Student("Gopal", 45, "Ferrari");
console.log(stud1)
console.log(stud2)

stud1.intro()
stud2.intro()