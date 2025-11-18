function myname(){
    console.log("S");
     console.log("h");
      console.log("r");
       console.log("a");
        console.log("u");
};
 myname();//function call or invoke 

// this is not good practice to write function 
//  function addtownum(num1,num2){
//     console.log(num1+num2);
//  }
//  addtownum(2+1);

 function addtownum(num1,num2){
    let result=num1+num2
    return result;
 }
 const result=addtownum(5,10);
 console.log("result:"+result);

 function userlogin(username){
    if(username==undefined){//if(username==undefined) and if(!username) is same 
        console.log("please enter username")
        return;
    }
   return `${username} just log in `
 }
// console.log(userlogin("Duggu"));
console.log(userlogin());//op is undefined just log in 

function addcartbills(...num3){
    return num3;
}
addcartbills(5,100,200,300);//o/p is 5 bcoz only first argument is considered 
console.log(addcartbills(100,200,300,400));// op is [100,200,300,400] bcoz of rest operator (...num3)
//object as function argument 
const myobj={
    username:"shrau",
    price:90,
}
function handleobj(anyobj){
   console.log(` ${anyobj.username} has to pay ${anyobj.price}rs`); 
}
 handleobj({
    username:"sdm",
    price:20,
});

//array as function argument 
const myarr=[10,20,30,40];
function handlearr(arraylist){
    return arraylist[2];
}
console.log(handlearr(myarr));//o/p is 30 