//for
for(let i=0;i<10;i++){
    // console.log(i);
}

for(let i=0;i<10;i++){
    console.log(`Oter loop:${i}`);
    for(let j=0;j<10;j++){
        // console.log(`Ineer loop:${j},outer loop:${i}`);
        // console.log(i+"*"+j+"="+i*j);
    }
}
//3 table 
for(let i=0;i<10;i++){
    // console.log(`Oter loop:${i}`);
    for(let j=0;j<10;j++){
       if(i===3){
// console.log(i+"*"+j+"="+i*j);
       }
       
    }
}
//array
const Myarr=["sham","ram","jam","dam"];
console.log(Myarr.length);
for(let i=0;i<Myarr.length;i++){
    const arrayelement=Myarr[i];
    console.log(`my array is :${arrayelement}`);
}

//break 
for(let i=1;i<20;i++){
       if(i===5){
        console.log("dettected 5");
        break;// exit from the loop
       }
       console.log(i);
}
//contineue
for(let i=1;i<20;i++){
    if(i===5){
        console.log("detteceted 5");
        continue;//skip the value and continue with nwxt iteration 

    }
    console.log(i);
}


//while
let index=0;
while(index<=10){
    console.log(`index values are:${index}`);
    index+=2;
}
let myarr=["apple","banana","grapes","mango"];
let arr1=0;
while(arr1<myarr.length){
    console.log(arr1);
    arr++;
}

//do while
let score=11;
do{
    console.log(`score value is :${score}`);//o/p is 11 coz condition is checked after executing the block 
    score++;
}while(score<=10);

//for of loop 
let arr=[1,2,3,4,5];
for (const i of arr) {
    console.log(`value is :${i}`);  
    
}
//for of loop 
let STR="GOOD MORNING";
for (const greet of STR) {
    console.log(`value is :${greet}`);  
    
}
//maps
let map=new Map();
map.set(1,"apple");
map.set(2,"banana");
map.set(3,"grapes");
for (const [key,value] of map) {
    console.log(`key is ${key}and value is${value}`);//here we using key and value for for-of loop 
}
//for of for object 
let myobj={
    name:"john",
    age:23,
}
// FIX: Using Object.entries() to make the object iterable for for...of loop
for (const [key, value] of Object.entries(myobj)) {
    console.log(`Key is: ${key} and value is: ${value}`);
}

//for each loop
const codeing=['java',"python","c++"];
//for each loop for array using anonymous function 
codeing.forEach(function (item){//function no need to be named as codeing.forEach(function name (item){
    // console.log(item);
}
)
//for each using arrow function 
codeing.forEach((val)=>{
    // console.log(val);
});
//for each having so many parameters
codeing.forEach((val,index,arr)=>{
    // console.log(val,index,arr);
});

//for each using refference function 
function Myfunction(str){
    // console.log(str);
}
codeing.forEach(Myfunction);

//array with objects 
const mycondeing=[
    {
        Languages:"javascript",
        shortcut:"js"
    },
    {
        Languages:"python",
        shortcut:"py"
    },
    {
        Languages:"cpp",
        shortcut:"c++"
    }
];
mycondeing.forEach((obj)=>{
    console.log(`language shortcut is:${obj.shortcut}and language name is :${obj.Languages}`);
})

