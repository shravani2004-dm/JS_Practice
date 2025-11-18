const mysymbol=Symbol("id1");
const obj={
    "name":"Shravani",//keys are writen in " " 
    "age":21,
    [mysymbol]:"id1",// sytax od symbol key
    city:"Pune",
    "email":"shrau@gmail.com",
};
console.log(obj.email);//its not apporiate to use dot notation if kry is in " "
console.log(obj["name"]);
console.log(obj[mysymbol]);
// obj.age=22;//update the value of age key 
// console.log(obj["age"]);
// Object.freeze(age);
// obj.age=23;//it will not update the value of age bcoz of freeze 
// console.log(obj["age"]);//
obj.greeting=function(){
    console.log("hello js user");
}
console.log(obj.greeting());
obj.greetingtwo=function(){
    console.log(`hello js user,${this.name}` );
}
console.log(obj.greetingtwo());

const user=new Object();
user.name="Shrau";
user.age=22;
user.islogin=true;
console.log(user);

const yname={
fullname:{
    username:{
        firstname:"saloni",
        Lastname:"shah"
    }
}
}
console.log(yname.fullname.username);//o/p is { firstname: 'saloni', Lastname: 'shah' }

const key1={1:"a",2:"b"};
const key2={3:"c",4:"d"};
const key3=Object.assign({},key1,key2)//o/p is { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(key3);