
DevBoard
Blogs
Question-1: What are the different ways to select an element in the DOM?
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.querySelector(".class or #id or tag");
document.querySelectorAll(".class or tag");
document.getElementsByName("name");

Question-2: What is the difference between innerHTML, innerText, and textContent ?
innerHTML -> This property sets or returns the HTML content (inner HTML) of an element.
innerText -> This property sets or returns the text content of the specified node, and all its descendants.
innerContent -> This property sets or returns the text content of the specified node, including hidden elements and all its descendants.

Question-3: What is event delegation in the DOM?
A technique where you attach a single event listener to a parent element, allowing it to handle events triggered on its child elements, instead of adding separate listeners to each child elemen.

Question-4: What is event bubbling in the DOM?
Event Bubbling is a process where an event first occurs on the target element and then bubbles up to its parent elements, all the way to the root element. In other words, when an event happens on an element, it propagates upward through its parent elements until it reaches the root of the DOM tree.

Question-5: How do you create, add, and remove elements using JavaScript?
To create an element, you can use the document.createElement() method.
To add an element, you can use the appendChild() method or the insertBefore() method.
To remove an element, you can use the removeChild() method.