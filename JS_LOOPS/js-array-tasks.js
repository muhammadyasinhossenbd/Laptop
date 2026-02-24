//Task 01

// const fruits = ['apple', 'orange', 'Grape', 'Banana', 'Watermelon' ] 
// console.log(fruits[3]) // console log the 3rd element
// fruits[2] = 'jambura'; //Changing the value of array inside using index
// console.log(fruits)


//Task 02
// const destinations = ['Sylhet', 'Saint Martin', 'Bandarban']
// console.log(destinations)
// destinations.push('Cox bazar');
// console.log(destinations)
// destinations.push('Rajshahi', 'Sri Mangal');
// console.log(destinations)
// destinations.pop()                  //Remove Last element of array
// console.log(destinations)
// destinations.shift();               //Remove First element of array
// console.log(destinations)
// destinations.unshift("Birisiri");   //Add First element to array
// console.log(destinations)


//Task 03
// const books = ['Math', 'English', 'Bangla', 'Science', 'ICT', 'IE']
// console.log(books)
// console.log(books.includes('Math'))
// books.push('Biology')
// console.log(books)


// Task 04

//Array.isArray(var)

// const books = ['Math', 'English', 'Bangla', 'Science', 'ICT', 'IE'];
// const foods = 'a t h ';
// const looks = ['IE'];

// console.log(Array.isArray(books))
// console.log(Array.isArray(foods))
// console.log(Array.isArray(looks))


// Task 05
// Use Concat 
const fruits = ['apple', 'orange', 'Grape', 'Banana', 'Watermelon' ] 
const books = ['Math', 'English', 'Bangla', 'Science', 'ICT', 'IE'];
// const bookf = [fruits + " _ " + books]
const bookf = fruits.concat(" || " + books)
console.log(bookf)