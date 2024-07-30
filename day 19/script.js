// let btn = document.querySelector(".bn")
// btn.onclick = (e)=> {
    // console.log("button was clicked")
    // let a=23;
    // a++;
    // console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }
// let btn = document.querySelector(".bn")
// btn.addEventListener("click",  (e)=>{
// console.log("Button 1 was clicked-handler 1")
//         console.log(e);
//     console.log(e.type)
//     console.log(e.target)
//  })
//  const handler2 = ()=>{
//     console.log("Button 1 was clicked ag-handler 2")
//  }
// btn.addEventListener("click",handler2)
// btn.addEventListener("click",  (e)=>{
//     console.log("Button 1 was clicked-handler 3")
// })
// btn.addEventListener("click",  (e)=>{
//     console.log("Button 1 was clicked-handler 4")
// })
// btn.removeEventListener("click" ,handler2)



//this is the question for practice
// let button = document.querySelector("#btn")
// let para=document.querySelector("#para")
// para.addEventListener("mouseover" ,()=>{
    // para.style.backgroundColor="red"
    // para.innerText="Pardeep yadav"
// })



//now here we learn about the classes and objects
// this is prototypes
// const employee = {
//     salary : 500000,
//     post : "manager",
//     Name:"Pardeep",
//     age(){
//         console.log("age should be greater than 18")
//     },
// }
// const sahilsharma={
//     salary:100000,
//     Name:"sahil",
//     experience:"2y",
// }
// sahilsharma.__proto__ =employee;

// class pardeep_pvt_ltd{
    // constructor(brand){
        // console.log("hey this is pardeep yadav company")
        // this.brandname=brand;
    // }
    // entry(){
    //   console.log("9:00 am");  
    // }
    // exit(){
        // console.log("5:00 pm");
    // }
    // brand(brand){
    //     this.brand_name=brand;
    // }
// }
// let empobj = new  pardeep_pvt_ltd("py");
// empobj.brand("pardeep_yadav");


//here we learn the synchronous and asynchronous programming
// function hello(){
//     console.log("hello")
// }
// setTimeout(hello,2000);

// console.log("pardeep")
// console.log("Rao")
// setTimeout(()=>{
//     console.log("yadav")
// },2000)
// console.log("shab")


//now we learn the  callback function
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,callback){
//     callback(a,b)
// }
// calculator(3,5,sum)
//  calculator(1,2 ,(a,b) => {
//     console.log(a+b);
// })
// let promise = new Promise((resolve,reject)=>{
//     console.log("the problem is resolved")
//     reject("some error occcured")
// })