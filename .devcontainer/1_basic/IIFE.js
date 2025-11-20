// Immediate Invoked Function Expression (IIFE) used for one-time use function to avoid global scope pollution

// ()() — normal syntax: first () is for function definition and second () is for function execution
//named IIFE
(function SDM(){
    console.log("hello sdm");
})();//; is must to stop the code of iife

//unnamed iife
(()=>{
    console.log("hello duggu");
})();

//parameterized iife 
((name)=>{
    console.log(`hello ${name}`);
})("shrau");

//iife with return value
((num1,num2)=>{
    console.log(num1+num2);
})(3,4);