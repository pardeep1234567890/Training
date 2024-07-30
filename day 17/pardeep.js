// pardeep= ()=>{
//     return "hello world"
// }
// console.log()
// let hello = "";

// hello = () => "hello babs"
//   return "hey! here is pardeep yadav"  ;

// console.log(hello(" world"))
//  function sum(a,b){
//    s=a+b;
//     return s;
//  }
//  let f=sum(3,4)
//  console.log(f);




// Arrow Functions
// let pardeep= (a,b) =>{
//     console.log(a*b);
// }
// pardeep(9,9)




// function vowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

// console.log(count);
// }
// vowel("apnacollege")





const pardeep_vowel = (str) => {
   let count=0;
   for (const char of str) {
      
  
   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
   {
      count++;
   }
 }
 return count;
};
pardeep_vowel("apnacollege")