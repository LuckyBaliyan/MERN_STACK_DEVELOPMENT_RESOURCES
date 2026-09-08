//OOPS CONCEPTS
class Device {
      name = "lg";
      price = "2000";
      model = "1211";
}

let d1 = new Device();
let d2 = new Device();

console.log(d1, d2);

//constructor
class Bottle {
      company = "milton";
      constructor(public name: String, public price: number, public color = "blue") { }
}

const b1 = new Bottle("milton v1", 2000);
const b2 = new Bottle("milton_V2", 1500, "transparent");
console.log(b1);
console.log(b2);


//second way
class Music {
      public name: String;
      public artist: String;
      public length: number;

      constructor(name: String, artist: String, length: number) {
            this.name = name;
            this.artist = artist;
            this.length = length;
      }
}

const m1 = new Music("Shape of You", "Ed Sheeran", 200);
console.log(m1);


//acess modifiers
class A {
      constructor(public name: String, private age: number, protected address: String) {
            this.name = name;
            this.age = age;
            this.address = address;
      }

      //setter
      setAge(age: number) {
            this.age = age;
      }
}

/*const a1 = new A("lucky", 20, "1022");
a1.setAge(21);
console.log(a1);*/


class B extends A {
      constructor(name: String, age: number, address: String) {
            super(name, age, address);
      }

      //getProtected variable instead of private use protected
      getAddress() {
            return this.address;
      }
}

const b3 = new B("lucky", 21, "1023");
console.log(b3.getAddress());
console.log(b3);


//getter & settters shorthands

class Pen {
      //private variable with get & set in shorthand
      private _name: String = "";

      constructor(name: String){
            this._name = name;
      }
      

      get name(){
            return this._name;
      }

      set name(val:String){
            this._name = val;
      }
      
}

const p1 = new Pen("TryMax");
console.log(p1.name);
p1.name = "TriMax";
console.log(p1, p1.name); 



//static Members
class MathUtility{
      static PI = 3.1415;

      
      constructor(public special: number){
            this.special = special;
      }

      static add(a: number , b: number){
            return a+b;
      }
}

console.log(MathUtility.PI);
console.log(MathUtility.add(10,20));

const mu = new MathUtility(10);
console.log(mu.special);


//Abstract Class

abstract class Bank{
      constructor (protected amount: number, protected accNo: String){
            this.amount = amount;
            this.accNo = accNo;
      }
      /**
       * @abstract method
       */

      isValid(amount: number){
            return this.amount >= amount ? true : false;
      }

      /**
       * @abstract method
       */
      withdraw(amount: number){
            if(this.isValid(amount)){
                  this.amount -= amount;
            }
      }

      deposite(amount: number){
            this.amount += amount;
      }
}


//particular Bank
class SBI extends Bank{
      constructor(amount:number,accNo:String, private bankNo : String){
            super(amount,accNo);
            this.bankNo = bankNo;
      }


      withdraw(amount: number){
            if(this.isValid(amount)){
                  this.amount -= amount;
                  return 'Sucess!';
            }

            return "Failure!";
      }
}

const acc1 = new SBI(50000,"123456789","SBI-001");
console.log(acc1, acc1.isValid(10000), acc1.withdraw(10000));
console.log(acc1, acc1.isValid(10000), acc1.withdraw(10000));