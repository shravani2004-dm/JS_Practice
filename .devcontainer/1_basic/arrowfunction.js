//this keyword is work in onjects 
const user= {
    username:"shrau",
    price:999,
    welcomeuser:function(){
        return `welcome  ${this.username} your bill is ${this.price}rs`;//this keyword used to refer current object 
        console.log(this);//o/p is user object
    }

}
console.log(user.welcomeuser());//o/p is welcome  shrau your bill is 999rs
user.username="Duggu";
console.log(user.welcomeuser());//o/p is welcome  Duggu your bill is 999rs
console.log(this);//o/p is window obj in browser and empty obj in node.js {}

// this keyword not work in arrow function
// function one(){
//     const Myname="Shrau";
//     console.log(this.Myname);//o/p is undefined coz this keyword not work in arrow function
// }
// one();

// const two=function(){
//     const Myname="Shrau";
//     console.log(this.Myname);//o/p is undefined coz this keyword not work in arrow function
// }
// two();

const final=()=>{
    const myname="shrau";
    console.log(this.myname);
}
final();//o/p is undefined coz this keyword not work in arrow function

const addtwonum=(num1,num2)=>{
    return num1+num2;                // explicit return in this we use {} for curlly braces we have to return the return value
}
console.log(addtwonum(3,4));//o/p is 7

//implicit return
const addNUM1=(num1,num2)=>num1+num2;
// IF WE dont use {}then its implicit return
const addNUM2=(num1,num2)=>(num1+num2);
console.log(addtwonum(3,4));

const name=()=>({username:"sdm"});//o/p is { username: 'sdm' } // we have to use () for object return in arrow function
console.log(name());