// Today we learn the forEach function which is the type of the function
// and it is basically use for Arrays and sometimes in Strings

// let arra =[1,2,43,44,55];
// arra.forEach(function fung(valu){
//     console.log(valu);
// }
// );

//the same work we can do for arrow function in (forEach)

// let array=[1,22,33,44,55]
// array.forEach((val)=>{
//     console.log(val);
// })


// let array=["Punjab" ,"Haryana" , "chandigarh"]
// array.forEach((val , index , array)=>{
//     console.log(val, index , array);
// })

//ques=For a given array of numbers, print the square of each value using the forEach loop
// let arr=[2,4,6,8,10]
// arr.forEach(function square(a){
//     console.log(a*a);
// })


//now we learn about the map function and this is also used for arrays, it also returns the same array
 
// let arr= [11,22,34,55,66,90];
// let newarr=arr.map(function funk(a){
//     // console.log(a);
//     return a*2;
// })
// console.log(newarr)


//now here we learn the filter function and it used for array also

// let array= [1,2,3,4,5,6,7,8,9]
// let newarray=array.filter((val)=>{
//     return val%2!==0;
// })
// console.log(newarray)


//let's learn the reduce function it is used to reduce the input if there is many inputs so its reduces the output for ex-sum of the numbers

// let arr=[2,3,5,7,9,1]
// let nw = arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr; 
// })
// console.log(nw)
//to find sum 
// let arr=[2,3,5,1]
// let nw = arr.reduce((pre,curr)=>{
//     return pre+curr; 
// })
// console.log(nw)


//ques= we have given array for marks of students,filter out the marks of students that scored 90+

// let array=[50 ,40 ,91,99,93,100,55]
// let na=array.filter((val)=>{
//     return val>90;
// })
// console.log(na)

// take a number n as an input from the user . create an array of numbers from 1 to n.

// let n= prompt("enter your number");
// let arr=[];
// for(let i=1; i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum=arr.reduce((pre ,curr)=>{
//     return pre+curr;
// });
// console.log(sum);
// let fac=arr.reduce((pre ,curr)=>{
//         return pre*curr;
//     });
//     console.log(fac);



//lets learn about the properties of dom manipulation
// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.firstElementChild.nodeName);


//ques= create a h2 heading element with text-"Hello javascript". append "from apna college students" to this text using js.
// let h2 =document.querySelector("h2");
// console.dir(h2);
// h2.innerText= h2.innerText +" from apna colllege students"


//ques=
// let newvalue =document.querySelectorAll(".box")
// newvalue[2].innerText="Hello"
// newvalue[1].innerText="hii"
// newvalue[0].innerText="hey"
// console.log(newvalue);
// let indx =1;
// let newvalue =document.querySelectorAll(".box")
// for (const iterator of newvalue) {
//     // console.log(iterator)
//     iterator.innerText=`new value assign ${indx}`
//     indx++;
// // }
// let div = document.querySelector("div")
// console.log(div);
// let d=div.getAttribute("id");
// console.log(d);
// let p = document.querySelector("p")
// console.log(p);
// let clas = p.getAttribute("class")
// console.log(clas);


//apply the style attribute in JS
// let js=document.querySelector("div");
// console.log(js);
// js.style.backgroundColor ="green";
// js.style.color="white"
// js.style.fontSize=" 30px"


//now we learn how to insert the elements with the help of javascript
// let new_text=document.createElement("p")
// new_text.innerHTML="<i>My name is Pardeep Yadav</i>"
// console.log(new_text);

// let div=document.querySelector("div")
// div.append(new_text);

// new_text.remove()        // remove function


let new_button = document.createElement("button")
new_button.innerText="click me"
console.log(new_button);

let body = document.querySelector("body")
body.append(new_button);
new_button.style.backgroundColor="red"
new_button.style.color="white"