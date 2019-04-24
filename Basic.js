/*  Variables and Data Types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
//Single line comment

// Variable naming rules
var _3years = 3;
var johnMark = 'Joh and Mark';
var if = 23;

*/

/* 
// Variable Mutation and Type coercion
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty egiht'; //age is already defined above so to change it we just do this
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/




/*  Basic Operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/* Operator Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 +5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
//x = x * 2;
x *= 2; //Same thingas one above
console.log(x);
x += 10;
console.log(x);
x++
console.log(x);
*/


/*  Little quick challenge
var massMark = 100;
var heightMark = 1.5;
var massJohn = 92;
var heightJohn = 1.2;
//BMI = mass / (height * height)
var johnBMI = massJohn / (heightJohn * heightJohn);
var markBMI = massMark / (heightMark * heightMark);
var johnMark = ('Is Mark\'s BMI higher than John\'s? ');

console.log(markBMI, johnBMI);
console.log(johnMark);
console.log(markBMI > johnBMI);
*/




/*  If Else Statements 
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 500;
var heightMark = 1.5;
var massJohn = 92;
var heightJohn = 1.2;
//BMI = mass / (height * height)
var johnBMI = massJohn / (heightJohn * heightJohn);
var markBMI = massMark / (heightMark * heightMark);

if(markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
                
} else {
    console.log('John\'s BMI is hgiher than Mark\'s.');
                }




var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age <30) {
    console.log(firstName + ' is a young man.');      
} else {
    console.log(firstName + ' is a man.');
}
*/

/* The Ternary Operator and Switch Statements
var firstName = 'John';
var age = 40;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/



/* Switch Statement
var job = 'cop';
switch (job) {
    case 'teacher':
    case 'instructor':
    case 'developer':
    case 'programmer':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Michigan');
        break;
    case 'designer':
        console.log(firstName + ' creates wonderful things.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 29:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
        
} */

/* Truthy and Falsy values and Equality Operators
// Falsy values: undefined, null, 0, empty strings, NaN
// Truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality Operators
if (heightjj == '23') {
    console.log ('The == operator does type coercion!');
} */



/* CHALLENGE TIME #2
// Jhon's Scores: 89 120 103
// Mikes scores: 116 94 123
// Mary's Scores: 97, 134 105
// Goal: calculate average score for each team. Decide which team has the best avergae score. change scores to show different winners. remeber there could be draws

var john = (89 + 134 + 123) / 3;
var mike = (116 + 134 + 123) / 3;
var mary = (97 + 134 + 123) / 3;
console.log('John ' + john);
console.log('Mike ' + mike);
console.log('Mary ' + mary);

if (john > mike && john > mary) {
    console.log('John\'s team is the winner!');
} else if (mike > john && mike > mary) {
    console.log('Mike\'s team is the winner!');
} else if (mary > john && mary > mike) {
    console.log('Mary\'s team is the winner!');
} else (console.log('It\'s a tie!'));
*/

/*Functions
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1952);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/* Arrays
// Initialize New Array
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 169);
console.log(names[2]);
console.log(names.length);

//Mutate Array data
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'Teacher', false];
john.push('Blue'); // Adds data to the end of an array
john.unshift('Mr.'); // Adds data to the beginning of the array
console.log(john);

john.pop(); //takes off end data
john.pop();
john.shift(); // Takes off beginning of data
console.log(john);

console.log(john.indexOf(1990)); // Returns the position of the data in the array. If the data isnt present it returns -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/* CHALLENGE NUMBER 3!


function tipCalculator(bill) {
    if(bill < 50) {
        bill = bill * 0.20;
    } else if (bill >= 50  && bill < 200) {
        bill = bill * 0.15;
    } else {
        bill = bill * 0.10;
    }
    return bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, finalValues);
*/



/*Objects and Properties
// Object Literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName); // either a . or 
console.log(john['lastName']); // [''] to call a property 
var x = 'birthYear'; // Can assign proprities inside of objects different variables that can be used to access them.
console.log(john[x]);


john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object(); // Object has to have capital O
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/* Objects and Methods
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear; // "this" means the current object
    }
};

john.calcAge();
console.log(john);
*/

/* CODING CHALLENGE 4
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
    
}

var mark = {
    fullName: 'Mark Jones',
    mass: 105,
    height: 2.05,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI.');
}
*/
/*
// Continue and Break statements
var john = ['John', 'Smith', 1990, 'Teacher', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//while loop
var i = 0;
while ( i < john.length) {
    console.log(john[i]);
    i++;
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

//CODING CHALLENGE
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }


            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}





var mark = {
    fullName: 'Mark Miller',
    bills: [77, 800, 10, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }


            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average)
}
