class User{
    constructor(name,age,place){
        this.name=name;
        this.age=age;
        this.place=place;
    }
    Running(){
        console.log(`${this.name} is Running....`)
    }
    Walking(){
        console.log(`${this.name} is Walking....`)
    }
}
let user1 = new User('Vignesh',19,'Kundapura')
let user2 = new User('Gopal',49,'Kundapura')
let user3 = new User('Yashoda',42,'Kundapura')

user1.Running()
user2.Walking()
user3.Walking()