var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalType;
(function (AnimalType) {
    AnimalType["COW"] = "Cow";
    AnimalType["CAT"] = "Cat";
    AnimalType["LION"] = "Lion";
    AnimalType["CHICKEN"] = "Chicken";
})(AnimalType || (AnimalType = {}));
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    return Animal;
}());
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow(name, sound) {
        var _this = _super.call(this, name, AnimalType.COW) || this;
        _this.sound = sound;
        return _this;
    }
    Cow.prototype.makeSound = function () {
        console.log("Name: ".concat(this.getName(), " Type: ").concat(this.type, " make a sound ").concat(this.sound));
    };
    return Cow;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, sound) {
        var _this = _super.call(this, name, AnimalType.CAT) || this;
        _this.sound = sound;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Name: ".concat(this.getName(), " Type: ").concat(this.type, " make a sound ").concat(this.sound));
    };
    return Cat;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, sound) {
        var _this = _super.call(this, name, AnimalType.LION) || this;
        _this.sound = sound;
        return _this;
    }
    Lion.prototype.makeSound = function () {
        console.log("Name: ".concat(this.getName(), " Type: ").concat(this.type, " make a sound ").concat(this.sound));
    };
    return Lion;
}(Animal));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken(name, sound) {
        var _this = _super.call(this, name, AnimalType.CHICKEN) || this;
        _this.sound = sound;
        return _this;
    }
    Chicken.prototype.makeSound = function () {
        console.log("Name: ".concat(this.getName(), " Type: ").concat(this.type, " make a sound ").concat(this.sound));
    };
    return Chicken;
}(Animal));
var COW = new Cow("Cow", "Mooooo");
COW.makeSound();
var CAT = new Cat("Cat", "Meongg");
CAT.makeSound();
var LION = new Lion("Lion", "Rawwwrrrr");
LION.makeSound();
var CHICKEN = new Chicken("Chicken", "Kukuruyukk");
CHICKEN.makeSound();
