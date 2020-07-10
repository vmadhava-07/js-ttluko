// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

let combineArray = acctData.map(acc => {
  return {
    ...acc,
    balance: balance[acc.acctNum]
  };
});
function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}
//user
console.log(combineArray.sort(compareValues("acctNum")));
//

function filterName(args) {
  let filterdata = combineArray.filter(a => a.user == args);
  return filterdata.length == 0 ? "user is not found" : filterdata;
}

//user
console.log(filterName("Bob"));
console.log(filterName("Charlie"));
console.log(filterName("Bob").sort(compareValues("balance", "asc")));

//a) filter by bob 
console.log(filterName("Bob"));
//b) filter by Charlie 
console.log(filterName("Charlie"));
//c) by account number
console.log(combineArray.sort(compareValues("acctNum")));
//d) filtered by Alice; sorted by balance ascending
console.log(filterName("Alice").sort(compareValues("balance")));
//d) filtered by Alice; sorted by account no ascending
console.log(filterName("Alice").sort(compareValues("acctNum")));

//common sort function with out user
console.log(combineArray.sort(compareValues("balance",'desc')));