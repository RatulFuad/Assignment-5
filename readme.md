

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


Ans:

1. getElementById is a JavaScript DOM method that finds the id attribute, getElementsByClassName is a JavaScript DOM method that finds the class, querySelector is a JavaScript DOM method that selects elements using CSS, querySelectorAll is a JavaScript DOM method that selects all matching elements using CSS selectors.

2.To create a new element in the DOM, you need to create the element with document.createElement(), set the content, and then add it to the parent element with appendChild() or append().

3.Event bubbling is a process where when an event occurs on a child element, it becomes a parent and spreads step by step to the elements above it.

4. Event Delegation is a technique where we place a single event listener on their parent element and handle the events of the children through event bubbling.

5. The difference between preventDefault() and stopPropagation()** methods is

preventDefault(): 
javascript e.preventDefault();
The event is fired

stopPropagation(): 
javascript e.stopPropagation();
The event is not fired