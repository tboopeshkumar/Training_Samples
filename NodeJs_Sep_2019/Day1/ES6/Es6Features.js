//let , const
let name="ES6";
const MAX=1000;

//arrow functions - implicit binding to 'this' context
let add = (x,y) =>{
    return x+y;
}
let mul = (x,y) => x*y;
let display = value => console.log(value);