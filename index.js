// # Javascript Conditionals Classwork
// ### Problem 1 :
// Create two variables
// ```
// let anyWord = [WORD]
// let theSameWord = [WORD]
// ```
// create an if statement comparing the two variables. If they are the same print
// ```
// THAT IS...
// CORRECT!!!
// ```
// Else print
// ```
// THAT IS...
// NOT CORRECT
let word1=prompt("Enter a word")
let word2=prompt("another word")
 anyWord=word1
 theSameword=word2
if(anyWord == theSameword){
    console.log("THAT IS CORRECT")
    } else{
        console.log("THAT IS NOT CORRECT")
    }







// ```
// ### Problem 2 :
// Ask the user to enter a number. If the number is positive print 
// ```
// [NUMBER] is positive.
// ```
// Oherwise print
// ```
// [NUMBER] is negative.

let num1 = prompt("Enter a number")
if(num1 >0){
    console.log(num1 = "positive")
}
else{
    console.log("Negative")
}


// ```
// ### Problem 3 :
// Ask the user to enter a number. Ask the user to enter another number. If the sum of those two numbers is even alert the user 
// ```
// The sum of [FIRST NUMBER] and [SECOND NUMBER] is even.
// ```
// Oherwise alert the user
// ```
// The sum of [FIRST NUMBER] and [SECOND NUMBER] is odd.
// ```

let num1= prompt("Enter a number")
let num2= prompt("Enter another number")
let total =parseInt(num1 + num2)
 if((num1+num2)/2){
    console.log("The sum  is even") 

 }



// ### Problem 4 :
// Define a variable called `secretWord` with the string value "secret". Ask the user to enter a word. Ask the user to enter another word. If the words are the same OR one of the words matches `secretWord` print 
// ```
// You got in...but we don't know how
// ```
// If both words are the same but DO NOT match `secretWord` print
// ```
// You got in...but only because your words matched
// ```
// If only one of the words matched `secretWord` print
// ```
// You got in..but only because one of your words matched the secret word
// ```
// If both words are the same AND they match `secretWord` print
// ```
// You got in!
// ```
// Otherwise print
// ```
// Locked Out
// ```
let secretWord= ("secret")
let word1 =prompt("Enter a Word")
let word2=prompt("Enter another word")
if(word1 == word2 || word1 == secretWord || word2 == secretWord){
    console.log("You got in...but we don't know how")
} 
   else if(word1==word2 != secretWord){
       console.log("You got in...but only because your words matched")
   }
   else if(word1 || word2 == secretWord){
       console.log("You got ins...but only because one of your words matched the secret word")
   }
   else if(word1 == word2 && secretWord){
       console.log("You got in")

   }  else{
    console.log("Locked")
   }


// ### Challenge:
// Ask the user to enter a day of the week. Print the corresponding Spanish word. If they do not input a day of the week print "That is not a day of the week in English."

// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.
