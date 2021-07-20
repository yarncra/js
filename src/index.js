import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayName() {
//     return this.name;
//   }
// }

// let person1 = new Human("PERS1", 100);
// console.log(person1.sayName());

// console.log(typeof Human);

function setUserInfo(name, age) {
  const user = {
    name,
    age
  };

  return user;
}

console.log(
  `${setUserInfo("Petr", 200).name} + ${setUserInfo("Petr", 200).age}`
);

const obj = {
  key1: undefined
};

console.log("key1" in obj);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in menu) {
  if (typeof menu[key] !== "string") {
    menu[key] *= 2;
  }
}

console.log(menu);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function getSum(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (key in salaries) {
      sum += salaries[key];
    }
  }

  return sum;
}

console.log(getSum(salaries));

let schedule = {};

function isEmpty(obj) {
  for (let key in schedule) {
    if (key in schedule) {
      return false;
    }
  }
  return true;
}

console.log("is empty? --->", isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log("is empty? --->", isEmpty(schedule)); // false
