1.//

function scopeTest() {
        if (true) {
          var varVariable = "I am var";
          let letVariable = "I am let";
          const constVariable = "I am const";
        }
        console.log(varVariable);
       
        console.log(constVariable);
      }
      
      scopeTest();

//"I'm a var, this is the correct answer because it is in the global scope. 'I am a let' and 'I am a const' will both give errors because they are block-scoped."//



2.//

function greet (name, greeting='Hello'){
        return `${greeting},${name}`
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"



3.// 

function sum(...arg){
     let total = 0;
     for(let i = 0; i < arg.length; i++){
       total += arg[i];
     }
     return total;
   }
   console.log(sum(1, 2, 3));
   console.log(sum(10, 20, 30, 40)); 
   console.log(sum(5));
   /*
   result is:
             6
             100
             5
   */
   
   
   
4.//
   
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const array3 = [7, 8, 9];
   const mergedArray = [...array1, ...array2, ...array3];
   console.log(mergedArray); 
   //result is: [1,2,3,4,5,6,7,8,9]
   
   
   
5.//
   
   const person = {
     name : "John",
     age : 30 ,
     greet(){
     return `Hi, I'm ${this.name} and I'm  ${this.age} years old`;
     }
   }
   console.log(person.greet()); 
   //result is: Hi, I'm John and I'm 30 years old
   
   
   
   
6.//
   
   const fruits = ["apple", "banana", "cherry"];
   for(let x  of fruits){
     console.log(x);
   }
   /*
   result is: 
             apple
             banana
             cherry
   */
   
   
7.//
   
   const name = "Alice";
   const age = 25;
   const message = `My name is ${name} and I am ${age} years old.`;
   console.log(message); 
   //result is: My name is Alice and I am 25 years old.
   

   
 8.//
   
   const students = [
     { name: "Alice", grade: 90 },
     { name: "Bob", grade: 85 },
     { name: "Charlie", grade: 92 }
   ];
   for(let y of students){
     console.log(`Name: ${y.name} , Grade: ${y.grade}`);
   }
   /*
   result is: 
             Name: Alice , Grade: 90
             Name: Bob , Grade: 85
             Name: Charlie , Grade: 92
   */
   
   
   
   //NO- 9
   
   const nestedArrays = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   
   for(let z of nestedArrays){
     let total = 0;
     for(let i = 0; i < z.length; i++){
       total += z[i];
     }
     console.log(total);
   }
   /*
   result is:
             6
             15
             24
   */
   
   
   
   

10.//

const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
