//OOPS CONCEPTS
class Device {
      name = "lg";
      price = "2000";
      model = "1211";
}

let d1 = new Device();
let d2 = new Device();

console.log(d1,  d2);

//constructor
class Bottle{
      company = "milton";
      constructor(public name:String, public price: number, public color="blue"){}
}

const b1 = new Bottle("milton v1", 2000);
const b2 = new Bottle("milton_V2", 1500, "transparent");
console.log(b1);
console.log(b2);


//second way

class Music{
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