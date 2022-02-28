class Dog{
    constructor(name) {
        this_name = name;
    }

    introduce(){
        console.log("This is" +this._name+" !");
    }

    static bark(){
        console.log("woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

Dog.bark();