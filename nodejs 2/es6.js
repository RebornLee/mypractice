// let arr = [1,6,2,7,3,9,4,5];
// arr.map(function(v,i){
// 	let flag = false;
// 		for(let j = 0 ; j < arr.length-i; j++){
// 			if(arr[j]>arr[j+1]){

// 			[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
// 		}
// 	}
// })
// console.log(arr);


// function foo({name="lilei",age=18}={}){
// 	console.log(name,age)
// }
// foo();
// foo({name:"sq",age:20});


// let arr1 = [123,321];
// let arr2 = [345,543];
// let arr =[...arr1,...arr2];
// [].push.apply(arr2,arr1);
// console.log(arr2);
// console.log(arr);


function foo(){
	for(var i =0 ; i<5;i++){
		// let timer = setInterval(()=>{
		// 	console.log(i);
		// 	clearInterval(timer)
		// },0)
        // setTimeout(function(){
        //     console.log(i);
        // },100)
		// (function(i){
		// 	console.log(i)
		// })(i);
	}
}

foo();

// function foo(...data){
//     console.log(data);
// }
// foo(1,2,3,4,5,6);



// function foo(){

// 	setTimeout(() => {

// 		console.log(this===global);

// 	},100);

// }
// foo();


// class person{
// 	static showinfo(){
// 		console.log("this is person")
// 	}
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}
// 	showname(){
// 		console.log("name :"+ this.name);
// 	}
// 	showage(){
// 		console.log("age :" + this.age);
// 	}
// }

// let a = new person("lilei",22);
// a.showage();
// a.showname();
// person.showinfo();


// let i = "hello".length;
// console.log(i);

// let {name:sb="sq"} = {name:"lilei",age:18};
// console.log(sb);


// class student extends person{
// 	constructor(name,age,gender){
// 		super(name,age);
// 		this.gender =gender
// 	}
// 	showgender (){
// 		console.log("gender:" + this.gender);
// 	}
// }


// let stu = new student("asdf",18 , "male");
// stu.showage();
// stu.showname();
// stu.showgender();
// student.showinfo();



// let buf = Buffer.alloc(3);
// let buf1 = Buffer.from("abcde");
// buf.slice(2,4);
// let buf3 = Buffer.byteLength(buf1,"utf8");
// buf.write("12346",0,2,"utf8")


// console.log(buf)



// const path = require('path');
// const fs = require('fs');

// fs.exists(path.join(__dirname,"demo.js"),(exists)=>{
//     if(exists){
//         console.log("ok")
//     }else{
//         console.log("err")
//     }
// })


// fs.exists(path.join(__dirname,"demo.js"),(err,stats)=>{
//     if(!err && stats.isFile()){
//         console.log("ok")
//     }
// })


// let str = "Hello world";
// console.log(str.inclouds("Hello"));