1)In JavaScript, different DOM selection methods are used to access elements from the HTML document.

getElementById() is used to select a single element based on its unique id attribute. Since an id should be unique in a document, this method always returns only one element.

getElementsByClassName() is used to select elements that share the same class name. It returns an HTMLCollection containing all matching elements. This collection is live, meaning it automatically updates if the DOM changes.

querySelector() selects the first element that matches a specified CSS selector. It provides more flexibility because it can select elements using id, class, tag name, or complex CSS selectors.

querySelectorAll() selects all elements that match a specified CSS selector and returns a NodeList. Unlike HTMLCollection, the NodeList returned by this method is static and does not automatically update when the DOM changes.

2)In JavaScript, a new element can be created and inserted into the DOM using built-in DOM methods.

First, an element is created using the document.createElement() method. After creating the element, content can be added using properties like textContent or innerHTML. Finally, the element is inserted into the document using methods such as appendChild(), append(), or prepend().

These methods allow dynamic modification of web pages without reloading the page.

3)Event bubbling is a concept in the DOM event model where an event starts from the target element and propagates upward through its parent elements in the DOM hierarchy.

When an event occurs on a child element, it first executes the event handler attached to that element. Then the event moves upward to its parent element, then to the grandparent, and continues until it reaches the root of the document.

This behavior allows parent elements to respond to events triggered by their child elements.

4)Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for its child elements. It works because of event bubbling.

Instead of attaching separate event listeners to multiple child elements, the parent element listens for events and determines which child element triggered the event using the event object.

Event delegation is useful because it improves performance, reduces memory usage, and works efficiently for dynamically added elements.

5)The preventDefault() method is used to stop the default behavior of an element. For example, it can prevent a form from submitting or a link from navigating to another page.

The stopPropagation() method is used to stop the event from propagating or bubbling up to parent elements in the DOM hierarchy.

In summary, preventDefault() controls the default browser action, while stopPropagation() controls the flow of the event through the DOM.