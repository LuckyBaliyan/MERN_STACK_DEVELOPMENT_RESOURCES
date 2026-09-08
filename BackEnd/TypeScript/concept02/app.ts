var a = 12;
// a = "Lb"; error because of type is number
a = 22;
console.log(a); // 22

let arr = [1, 2, 3, "Hello World"];
console.log(arr);

const obj = [1, 2, 3, 4, { name: "LB" }];
console.log(obj);

//enum enumerations

enum statusCodes {
      BAD_REQUEST = 401,
      SERVER_ERROR = 500
}

console.log(statusCodes.BAD_REQUEST);

/*function abcd(): never {
      while(true) abcd();
}

abcd();

console.log("Hello World");
*/

interface user {
      name: String,
      email: String,
      readonly password: String,
      sex?: String,
}

function getData(obj: user) {
      const { name, email, sex = "prefered not to say", password = "122" } = obj;
      return "Name: " + name + " || Email: " + email + " || Sex: " + sex + " || Password: " + password;
}

console.log(getData({ name: "Ajay", email: "AJax@gamail.com", password: "12221" }));


//Extends
interface Admin extends user {
      admin: boolean,
}

function getAdminData(obj: Admin) {
      return obj.name + " " + obj.email + " " + obj.sex + " " + obj.password + " " + obj.admin;
}

console.log(getAdminData({ name: "Ajay", email: "AJax@gamail.com", password: "12221", admin: true }));

//Merging interfaces
interface Abc {
      name: string,
}

interface Abc {
      email: String,
}


const abc: Abc = {
      name: "Lucky",
      email: "[EMAIL_ADDRESS]",
}

console.log(abc.name + " " + abc.email);

/**
 * @FUNCTIONS FROM HERE
*/

function abcd(name: String, age: number, callback: () => void) {
      callback();
};

abcd("xyz", 20, () => {
      console.log("Hello World!");
});

function abcde(name: String, age: number, cb: (val: String, val2: number, val3: String) => String, gender = "CANT SAY!"): String {
      return cb(name, age, gender);
}

const res = abcde("xyz", 23, (val: String, val2: number, val3: String) => {
      return `${val} ${val2} ${val3}`;
}, "MALE");

console.log(res);

//rest opr
const getArr = (...args: number[][]) => {
      return args.flat();
}

console.log(getArr([1, 2, 3], [4, 5, 6]));

//FUNCTION OVERLOADING
function xyz(a: String): void;
function xyz(a: String, b: number): number;

function xyz(a?: any, b?: any) {
      if (typeof a == 'string' && b == undefined) {
            console.log("Hey!");
      }
      else if (typeof a == 'string' && typeof b == 'number') {
            return a.length * b;
      }
}

xyz("lucky");
const r = xyz("Lucky", 12);
console.log(r);