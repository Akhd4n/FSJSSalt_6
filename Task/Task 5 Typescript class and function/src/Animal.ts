enum AnimalType {
    COW = "Cow",
    CAT = "Cat",
    LION = "Lion",
    CHICKEN = "Chicken"
}

class Animal {
    name: string
    type: AnimalType

    constructor(name: string, type: AnimalType) {
        this.name = name
        this.type = type
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): Animal {
        this.name = name
        return this
    }

}

class Cow extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.COW)
        this.sound = sound
    }

    public makeSound():void{
        console.log(`Name: ${this.getName()} Type: ${this.type} make a sound ${this.sound}`);
    }
}

class Cat extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.CAT)
        this.sound = sound
    }

    public makeSound():void{
        console.log(`Name: ${this.getName()} Type: ${this.type} make a sound ${this.sound}`);
    }
}

class Lion extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.LION)
        this.sound = sound
    }

    public makeSound():void{
        console.log(`Name: ${this.getName()} Type: ${this.type} make a sound ${this.sound}`);
    }
}

class Chicken extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.CHICKEN)
        this.sound = sound
    }

    public makeSound():void{
        console.log(`Name: ${this.getName()} Type: ${this.type} make a sound ${this.sound}`);
    }
}


let COW: Cow = new Cow("Cow", "Mooooo") 
    COW.makeSound()

let CAT: Cat = new Cat("Cat", "Meongg")
    CAT.makeSound()

let LION: Lion = new Lion("Lion", "Rawwwrrrr")
    LION.makeSound()

let CHICKEN: Chicken = new Chicken("Chicken", "Kukuruyukk")
    CHICKEN.makeSound()