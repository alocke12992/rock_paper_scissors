JavaScript

How to comment code.

  // This is a single-line comment.

  /*
  This is
  a
  multi-line
  comment.
  */

  Datatypes

// This is similar to Ruby.

// Boolean: true/false
// Number:
//   Integer: -7, 24, 234
//   Float: -.7, 0.5, 7.0, 3.14
// String: 'This is a string'
// Array: []

// These are not similar to Ruby.

// Null: null
// undefined: undefined
// Object:  { name: 'Dave', age: 37 }
// Date:

Print to the console.

// console.log("hello") = "hello"

// Math module is built into the browser.
//
// EX: Math.abs(-100), Math.pow(3)

Comparing in JS.

// Use === most of the time in JS.

// 4 > 2 => true
// 4 < 2 => false
// 4 == 4 => true
// 4 === '4' => false // Type-checking and value-checking.
// x > 4 && x < 7 Both sides have to resolve to true.
// x > 10 || x < 1 Only one side has to resolve to true.

Initializing variables in JS.

// var name = 'Dave' // You need to define it with var first.
//
// ... a bunch of code happened ...
//
// name 'Jake' // But not the second time.

Naming conventions in JS.

// Use camelCase in JS.

// var first_$2Name = 'Dave' // Cannot start with an integer.

Incrementing and Decrementing numerical values in JS.

// By 1.

// var balance = 1000
// console.log(balance++) ==> 1000 // Change it to ++balance if you want it to show 1001.
// console.log(balance) ==> 1001
// console.log(--balance) ==> 1000

// By more than 1.

// var balance = 1000
// balance += 2 => 1002
// balance *= 2 => 2004
// balance /= 2 => 1002

Working with Strings in JS.

  Concatenate

  // var planet = 'Earth'
  // var greeting = 'Hello'
  // var str = greeting + ' ' + planet

  // var meaning = "The meaning of life is " + 42
  // console.log(meaning)

  // var meaning = 'Name:\tDave' => Name: Dave

  Escape characters

// \t = tab space
// \n = new line
// \\ = print backslash
// I can\'t do this' => I can't do this

Functions and properties in JS.

// var longString = "This is a long string"
// var shortString = "Shorter"
//
// longString.length // Property
// shortString.charAt() // Function, the () is indicative of it.

String and integer manipulation in JS.

To integer.

// var number = "12.2"
// console.log(Number(number)) => 12.2
// console.log(parseInt(number)) => 12
// console.log(parseFloat(number)) => 12.2

To string.

// var number = 12.2
// console.log(number.toString()) => '12.2'

To x decimal places.NOTE: Comes back as a string.

  // var number = 25.21342
  // console.log(number.toFixed(6)) => 25.213420 // 6 decimal places.
  // console.log(number.toPrecision(2)) => 25 // Total numbers.

  Rounding.

// var number = 8.4999
// console.log(number.round) => 8

Random numbers.

  // var result = Math.random() * 6 // Random number between 0 - 6.
  // var result = Math.floor(random() * 6 + 1) // Gives you a number between 1 - 6.


  Methods

Examples of methods.

// function sayHello(greeting, planet) {
//   console.log(greeting + ' ' + planet)
//   return 1 + 2 // You have to use the return statement to get a value out of it.
// }
//
// sayHello('Hello', 'Mars') => "Hello Mars"
// sayHello('Goodbye', 'Pluto') => "Goodbye Pluto"
// console.log(num) => 3

Example of using methods inside methods.

  // function multByThree(num) {
  //   return num * 3
  // }
  //
  // var total = multByThree(sum(5,7))

  Arrays

Finding things in the array.

// var colors = ["red", "green", "blue", "green"]
// console.log(colors.indexOf("green")) => 1 // Finds the first one left to right.
// console.log(colors.includes("green")) => true // Is it there?

Adding things to the array. // These commands are just like Ruby - pop, shift, unshift, etc.

Things unlike Ruby...

// var colors = ["red", "green", "blue", "green"]
// console.log(colors.slice(2)) => ["blue", "green"] // This does not mutate the original array. Takes away the number of element in the front of the array.
// console.log(colors.reverse()) => ["green", "blue", "green", "red"] // Does mutate the original array, which is different from Ruby.

Objects // These are Hashes in Ruby.

// var person = { name: 'Dave', age: 36 }
//
// person.age // Refers to the age of said person.
// person['age'] // Could do it this way.
//
// var input = 'age' // Could also do it this way if you don't know the string.
// person[input]
//
// person.firstName = 'Steve' // Changes key-value pairs.

// JSON talks between Ruby and JS to convert Objects to Hashes and vice versa.

Classes

// var Person = function(firstName, lastName) {
//   this.firstName = firstName // Creating this instance of a class.
//   this.lastName = lastName
// }
//
// Person.prototype.logPerson = function() {
//   console.log(this.lastName + ', ' + this.firstName)
// }
//
// var p = new Person('Jake', 'Sorce')
// p.firstName
// p.lastName
// p.logPerson