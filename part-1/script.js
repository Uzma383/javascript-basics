// /**
//  * Part 1: DOM Selection Basics
//  *
//  * In this file, you will practice selecting DOM elements
//  * using various methods.
//  *
//  * Open index.html in your browser and check the console (F12)
//  * to see the results of your code.
//  */

// // ============================================
// // EXAMPLE: How to select and log elements
// // ============================================

// // Selecting by ID
// const titleExample = document.getElementById('title');
// console.log('Example - Title element:', titleExample);

// // Selecting by query selector
// const firstParagraph = document.querySelector('p');
// console.log('Example - First paragraph text:', firstParagraph.textContent);


// // ============================================
// // EXERCISE 1: Basic Selection
// // ============================================

// // Task 1.1: Select the element with ID 'list-title' and log it
// // Your code here:


// // Task 1.2: Select the first element with class 'box' and log it
// // Your code here:


// // Task 1.3: Select ALL list items and log how many there are
// // Hint: Use querySelectorAll and .length property
// // Your code here:



// // ============================================
// // EXERCISE 2: Exploring Properties
// // ============================================

// // Task 2.1: Select the image (id="sample-image") and log its 'src' attribute
// // Hint: Use getAttribute('src') or .src property
// // Your code here:


// // Task 2.2: Select the link (id="sample-link") and log its 'href' attribute
// // Your code here:


// // Task 2.3: Select the shopping list (id="shopping-list") and log its innerHTML
// // Your code here:



// // ============================================
// // EXERCISE 3: Multiple Selections
// // ============================================

// // Task 3.1: Select all elements with class 'highlight'
// // Your code here:


// // Task 3.2: Loop through all highlighted elements and log each text content
// // Hint: Use forEach() method
// // Your code here:


// // Task 3.3: Select all list items and log each item's text in uppercase
// // Hint: Use .toUpperCase() method on textContent
// // Your code here:



// // ============================================
// // BONUS CHALLENGE
// // ============================================

// // Challenge: Select the container div and count how many child elements it has
// // Hint: Use .children.length
// // Your code here:

// ============================================
// EXERCISE 1: Basic Selection
// ============================================

// Task 1.1
const listTitle = document.getElementById('list-title');
console.log('Task 1.1 - List Title:', listTitle);

// Task 1.2
const firstBox = document.querySelector('.box');
console.log('Task 1.2 - First Box:', firstBox);

// Task 1.3
const allListItems = document.querySelectorAll('li');
console.log('Task 1.3 - Number of list items:', allListItems.length);


// ============================================
// EXERCISE 2: Exploring Properties
// ============================================

// Task 2.1
const image = document.getElementById('sample-image');
console.log('Task 2.1 - Image src:', image.getAttribute('src'));

// Task 2.2
const link = document.getElementById('sample-link');
console.log('Task 2.2 - Link href:', link.getAttribute('href'));

// Task 2.3
const shoppingList = document.getElementById('shopping-list');
console.log('Task 2.3 - Shopping List innerHTML:', shoppingList.innerHTML);


// ============================================
// EXERCISE 3: Multiple Selections
// ============================================

// Task 3.1
const highlightedElements = document.querySelectorAll('.highlight');
console.log('Task 3.1 - Highlighted Elements:', highlightedElements);

// Task 3.2
highlightedElements.forEach(element => {
    console.log('Task 3.2 - Highlighted text:', element.textContent);
});

// Task 3.3
allListItems.forEach(item => {
    console.log('Task 3.3 - Uppercase Item:', item.textContent.toUpperCase());
});


// ============================================
// BONUS CHALLENGE
// ============================================

const container = document.querySelector('.container');
console.log('Bonus - Number of child elements:', container.children.length);
