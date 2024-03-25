// functions
// in-built fuctions

let name = "dude";
name.lowerCase();
name.CharAt();

///////////////////////////////////////////////////////////
// let's define our own funtion!!!
// function syntax: 

function sum() {
    return 2 + 2;
}
console.log(sum());
//////////////////////////////////////////////
function mult() {
    return 2*2;
}
console.log(mult());

////////////////////////////////////////////////////////
// let's assign some parameters

function mult(num1,num2) {
    return num1 * num2;
}
console.log(mult(2,4));

////////////////////////////////////

function multi(num1,num2) {
    console.log(num1);
    console.log(num2);
    return num1 * num2;
}
console.log(multi(2));

///////////////////////////////////

function mult(num1,num2) {
    if (num2 === undefined) {
        return num1 * num1;
    }
    return num1 * num2;
}
console.log(mult(9));

////////////////////////////////////////////////////////
// another example!!!
// to get username from their email

function getusernamefromemail(email) {
    return email.slice(0,email.indexOf("@"));
}
console.log(getusernamefromemail("helga@Github.com"));

////////////////////////////////////////////////////////
/* if you don't provide name for a function
then it's an anonymous function */
// **** ANONYMOUS FUNCTIONS ****//

const getusernamefromemail = function (email) {
    return email.slice(0,email.indexOf("@"));
}
console.log(getusernamefromemail("user@GitHub.com"));
//////////////////////////////////////////////////////
let getUserNameFromEmail = function (email) {
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@GitHub.com"));

/////////////////////////////////////////////////////////
// ARROW FUNCTIONS => //

let getUserNameFromEmail = (email) => {
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@GitHub.com"));
///////////////////////////////////////////////////////////
// last example before we finish intro to fuctions
/* so let's create a toProperCase method(function) inoder
to set any improper names or strings to a proper format */

let toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("jack BULWARK"));

///////////////////////////////////////////////////////////////////
/* so that would be it 
functions provide reusable code!!!****
we can define blocks of code and we can call them whenever we need!!!! */




















