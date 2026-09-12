//npx ts-node oop.ts
/* 4 principles of OOP
1. Encapsulation (التغليف): Hide and protect data. 
   Access modifiers (public, private, protected) control visibility of class members.
   1.1 public: accessible from anywhere (class , subclass , object)
   1.2 private: accessible only within the class(class only)
   1.3 protected: accessible within the class and its subclasses(class , subclass)

2. Inheritance  (لوراثة): Reuse code from another class.
3. Polymorphism  (تعدد الأشكال): Same method, different behavior.
  3.1 Method Overloading: Same method name, different parameters.
  3.2 Method Overriding: Same method name, same parameters, different implementation.
4. Abstraction   (تجريد): does not have implementation.
*/

/* class is a blueprint for creating objects
class has properties(attribute) and methods*/

class Animal{
/* to protect the animalname attribute from being accessed directly from outside the class,
  we can use the private access modifier.
  This is an example of encapsulation.*/
private animalname:string = '';
public  animalage : number = 12;
// we can also use the readonly access modifier to make the animaltype attribute read-only.(as const)
public readonly animaltype : string = 'mammal'; 
protected animalsound : string ='meow'

constructor (animalname:string ,animalage:number){
    this.animalname=animalname
    this.animalage=animalage
}

// to access the private attribute, we can create a public method (getter) to get the value of the private attribute.
getanimalname(){
    console.log(`the animal name is : ${this.animalname}`)
}

setanimalname(animalname:string){
this.animalname=animalname
}

public getAnimalSound(){
    console.log(`the animal sound is : ${this.animalsound}`)
}}

// to inherit from the Animal class, we can use the extends keyword.
class Dog extends Animal{
public animalcolor:string = "red"   
 animalsound : string ='barking ho ho ho' 
 constructor(animalname:string, animalage:number, animalcolor:string){
   super(animalname, animalage)// is used to call the constructor of the parent class (Animal) and pass the parameters to it.
   this.animalcolor=animalcolor

}}

class Monkey extends Animal{
    // if i can not create a constructor in subclass ,
    //  a new object of the subclass will be created  
    // and should use the constructor of the parent class (Animal) to create the object.
}
 // look at the constructor of the parent class (Animal) is used to create the object of the subclass (Monkey)
 const monkey = new Monkey('monkey', 5)

// to use the class, we need to create an object from the class
let cat = new Animal('elephanet',10);
cat.getanimalname()
console.log(`cat age: ${cat.animalage}`)
cat.getanimalname()
cat.getAnimalSound()


const dog= new Dog('doggy',5, 'black')
console.log(`dog age: ${dog.animalage}`)
dog.getanimalname()
dog.getAnimalSound()
console.log(`dog color: ${dog.animalcolor}`)

/* abstract class is a class that cannot be instantiated.
 It can only be inherited from. 
 It can have abstract methods that must be implemented by the subclasses.
 cant not be used in creating objects , can only be inherited but can create objects of the subclasses
 */

 abstract class Car{
    // in abstract class can contain abstract and non-abstract methods
    /* 1- static keyword :
         1.1 static attribute: can be accessed without creating an object of the class.
         1.2 static method: can be called without creating an object of the class.*/
    static carInfo : string = "all information" 
    static getcarname(){console.log('car')}
    abstract getcarspeed():void; // should determined type of abstract method
}


class Nissan extends Car implements Color, Size{
    // since the nissan class is inheriting from the abstract class Car, 
    // it must implement the abstract method getcarspeed().
    getcarspeed():void{
        console.log('nissan speed is 200 km/h')
    }

    // must give them a value 
    red: string ='red';
    size: number = 13;

    fontSize(): void {
        console.log('font size is 12px');
    }
}


const sunny = new Nissan()
sunny.getcarspeed()
console.log(`the car info is : ${Car.carInfo}`)

// class con only extend one class but
//  can implement multiple interfaces
interface Color{
red:string;

}
interface Size{
    size:number;
    fontSize():void;
}
