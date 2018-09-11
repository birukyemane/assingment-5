// Java Exercises 

// Utility methods 


function display (arg1, arg2) {
  console.log(arg1 + ' ' + arg2);
}

const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  

//  Part 1

// 1. Variables 
console.log(' 1. Variables \n \n');

  // a. done on console 
  

  // b
  let firstName = 'Biruk',lastName = 'Yemane', maritalStatus = 'Single', country = 'Ethiopia', age = 30;

  //c 
  let myAge = 30 , yourAge = 30;  
  console.log(`Output : \n I am ${myAge} years old. \n You are ${yourAge} years old.`);

// 2 Data types
console.log(' \n 2 Data types \n\n');

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(maritalStatus));
console.log(typeof(country));
console.log(typeof(age));

// 3. Strings
console.log(' \n 3 Strings \n\n');

let company = 'Integrify Academy';
console.log(company); // a 
console.log(company.length); // b
console.log(company.toLocaleUpperCase()); // c
console.log(company.toLowerCase()); // d
console.log(company.slice(0,1));    // e
if(company.includes('Academy')){  // f
 console.log('it includes Academy');
} else{
 console('No it doesnt contain Academy');
}
console.log(company.split(' '));  // g
console.log(company.replace('Integrify Academy','Microsoft Academy')); // h
console.log(company.charAt(10)); // i
console.log(company.charCodeAt(10)); // j
console.log(company.indexOf('e')); // k
console.log(company.lastIndexOf('e')); // l
console.log(company.trim()); // m
console.log(company.startsWith('I',0)); // n
console.log(company.endsWith('y')); // 0
console.log(company.match(/a/g)); // r
console.log('Integrify '.concat('Academy')); // s
console.log('Integrify Academy '.repeat(5)); // t

// 4. Boolean

console.log(' \n 4 Strings \n\n');

// a
console.log(company.length > 0);
console.log(company == 'Integrify Academy');
console.log(company.includes('A'));

// b
console.log(company.length == 0);
console.log(company == 'Integrify Academyd');
console.log(company.includes('AA'));

// 5 Arithmetic Operator
console.log(' \n 5 Artimeic operator \n\n'); 

let operandOne = 4;
let operandTwo = 3;

display('addition', operandTwo * operandOne);
console.log('subtraction', operandOne-operandTwo);
console.log('modulos', operandOne % operandTwo);

// 6 Comparison Operators

console.log(' \n 6Comparison Operators \n\n'); 

  display ('greater than' ,4 > 3);
  display ('greater than or equal to' , 4 >= 3);
  display ('les than', 4 < 3);
  
// 7 Logical Operators done on console
// 8  Conditional - done on console
// 9 Ternary operator - done on console
// 10  Array 

console.log(' \n 10 Arrays \n\n'); 


let itCompanies = ['Facebook', 'Google', 'Microsoft', 'IBM', 'Apple','Oracle','Amazon'];
console.log(itCompanies);
console.log(`the number of companies are ${itCompanies.length}`);
for (let company of itCompanies){
  console.log(company);
}
for (let company of itCompanies){
  console.log(company.toLocaleUpperCase());
}

console.log(`${itCompanies[0]}, ${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
itCompanies.sort();
itCompanies.reverse();

// 11 loop 

console.log(' \n 11 Loop \n\n'); 

for(let i = 0; i <= itCompanies.length; i++){
  console.log(itCompanies[i]);
}

// 12 Function

console.log(' \n 12 Loop \n\n'); 

function printArray (array){
  console.log(array);
}

printArray([1,2,3,4]);

function reverseArray (arry){
  let newArray = [];
  arry.forEach(element => newArray.unshift(element));
  return newArray;
}

console.log(reverseArray([1,2,3]));

function capitalizeArray(arry) {
  return arry.map(element => element.toUpperCase());
}

console.log(capitalizeArray(['a', 'b']));

function sumOfEven(range){
  let sum = 0;
  for(let i = 0; i<= range; i++){
    if(i % 2 == 0) sum += i;
  }
  console.log(sum);
}

sumOfEven(6);

function evensAndOdds (range){
  let countOdd = 0, countEven = 0;
  for(let i = 0; i <= range; i++){
    if(i % 2 == 0) countEven ++;   
    else countOdd ++;
  } 
  console.log(`Output: \n evenAndOdds(${range});\n The numver of odds are ${countOdd}. \n The number of evens are ${countEven}.`);
}

 evensAndOdds(10);

 function randomHexaNumberGenerator(){
  let randomNum = Math.floor(Math.random()* 10000000);
  return `#${randomNum.toString(16)}`;
}
console.log(randomHexaNumberGenerator());


// 11

function userIdGenerator() {
  let characters = "abcdefghijklmnopqrstuvwzwz0123456789ABCDEF";
  let generatedID = [];
  for ( let i = 0; i < 7; i++) {
    let choice = Math.floor(Math.random() * characters.length);
    generatedID.push(characters[choice]);
  }
  return generatedID.join('');
}

console.log(userIdGenerator());



  // 12

function userIdGeneratorOption(noOfChar) {
  let characters = "abcdefghijklmnopqrstuvwzwz0123456789ABCDEF";
  let generatedID = [];
  for ( let i = 0; i < noOfChar; i++) {
    let choice = Math.floor(Math.random() * characters.length);
    generatedID.push(characters[choice]);
  }
  return generatedID.join('');
}
function userIdGeneratedByUser(){
  let noOfIds = prompt('How many Id you want?')
  let noOfchar = prompt('How many characters?');
  let generatedIds = [];
  for ( let i = 0; i < noOfIds; i++) {        
    generatedIds.push(userIdGeneratorOption(noOfchar));
  }
  return generatedIds.join('\n');
}
console.log(userIdGeneratedByUser());



// 13 Objects 

let personalAccount = {
  firstName : 'Brook',
  lastName : 'Yemane',
  incomes : [{description : 'salary', amount :36000},
             {description: 'bonus', amount: 10000},
             {description: 'online courses', amount :5500}],
  expenses : [{descripton:'rent', amount:18000},
              {description:'shopping', amount: 6000},
              {descrition: 'travel', amount: 3000}],
  
  calculateTotal :(accumulator, currentValue) => accumulator + currentValue.amount,  

  totalIncome : function(){
    return this.incomes.reduce(this.calculateTotal, 0);
  },  

  totalExpense : function(total){        
    return this.expenses.reduce(this.calculateTotal, 0);
  },
  accountInfo: function () {
    console.log(`Full Name : ${this.firstName} ${this.lastName} \n Total income : ${this.totalIncome()} \n Toatal expense : ${this.totalExpense()} \n ${this.accountBalance()}`);
  },
  accountBalance: function () {
    let blance =  0;
    return `Balance : ${this.totalIncome() - this.totalExpense()}`;
  },

  addIncome : function() {
    let incomeDescription = prompt('Enter income description');
    let incomeAmount = Number(prompt('Enter income amount'));
    this.incomes.push({description:incomeDescription, amount: incomeAmount});
  },

  addExpense : function() {
    let expenseDescription = prompt('Enter expense description');
    let expenseAmount = Number(prompt('Enter expense amout'));
    this.expenses.push({description: expenseDescription, amount: expenseAmount});
  }
}

// 
personalAccount.accountInfo();
personalAccount.addIncome();
personalAccount.addExpense();
personalAccount.accountInfo();

// 14  Date Object

 
function displayDateTime (){
  var today = new Date();
  var mn = today.getMinutes();
  var hh = today.getHours();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = mm + '/' + dd + '/' + yyyy + ' '+  hh + ':' + mn;
  return today;

}
console.log(displayDateTime());

// 16

// a
function getStringLists(arry) {
  return arry.filter(element => typeof(element) == 'string');
}
console.log(getStringLists([1,2,'abc',true,'xyz']));


// b

function categorizeCountries (){
  let regex1 = RegExp('[A].*');
  return countries.filter(country => regex1.test(country));
}

console.log(categorizeCountries());

// c

let getCountries = function(elt, index){
  return index < this;
}

function getFirstCountries(num){  
  return countries.filter(getCountries,num)
}

console.log(getFirstCountries(10));


// d

let isLastCountry = function (elt, index){
  return this > (countries.length-1) - index; 
}

function getLastCountries(num){
  return countries.filter(isLastCountry,num);
}

console.log(getLastCountries(1));
