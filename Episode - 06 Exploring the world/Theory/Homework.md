# Episode - 06 | Exploring the world

## Q: What is `Microservice`?
A: `Microservices` refers to the style of application architecture where a collection of independent services communicate through lightweght APIs.
Each microservice is designed to perform a specific business function and can be deployed, developed, and scaled independently. It allows you to take a large application and decompose or break it into easily manageable small components with narrowly defined responsibilities. Microservices can be written in a variety of programming languages, and frameworks, and each service acts as a mini-application on its own.   

## Q: What is `Monolith architecture`?
A: `Monolithic Architecture` is a traditional approach to designing software where an entire application is built as a single, indivisible. In this type of architecture, all the different components of the application, such as interface, business logic, and data access layer, are tightly integrated an deployed together. 
This means that any changes or updates to the application require modifying and redeploying the entire monolith. Monolithic architecture are often characterized by their simplicity and ease of development, especially for small to medium-sized applications. However, they become complex and difficult to maintain as the size and complexity of the application grows.

## Q: What is the `difference` between `Monolith and Microservice`?
A: With `Monolithic Architecture` , internal communicaion is simpler as all the processes are tightly coupled and run as a single service. But that just means that if one module fails, the entire system is affected. The development speed is comparatively slower than microservices as it's more complex architecture that the other architecture as the whole app requires development only at once. It is easier to understand development process because of the single code base, monitoring a single app is easier. Resource utilization is less efficient and excessive testing is more challenging in monolithic architecture.

With `Microservices`, an application is built as independent component and a small unit in itself which means that failure in one module does not affect the whole system. Small modules are developed faster and testing becomes much easier in the case of microservices. Resource allocation are also optimal for each service. These services communicate via well-defined interface using lightweight APIs and are more complex because of the distributed nature. 

## Q: Why do we need a `useEffect Hook`?
A: `useEffect Hook` is React hook used to handle side effects functions (those functions that react with the outside world or out of Reactjs Ecosystem), and with the `useEffect`, we can separate them into another function. It allows you to perform side effects in your components which include tasks like fetching data, directly updating the DOM, setting up timers, or subscribing to external services. 
The basic syntax of `useEffect`:
```js 
useEffect(() => {},[dependency1, dependency2, ...]); 
// The first effect is a function that contains the side effect code.
// The second argument, is optional, is an array of dependencies. If any dependency change, the effect will re-run. 
// If you omit this array , the effect runs after every render. By specifying dependencies you control when the effect runs.
```
We use `useEffect` for:
- **Managing Side Effects**: When you need to perform action that are not directly related to rendering UI (such as fetching data from an API), `useEffect` comes to the rescue. It ensures that these side effects happen at the right time durin the component lifecycle.
- **Component Lifecycle Events**: In class-based components, lifecycle methods handle side effects. `useEffect` serves as a partial replacement for these methods in functional components.
- **Clean and Declarative Code**: Instead of scattering side effects logic across different lifecycle methods, `useEffect` provides a clean and declarative way to manage side effects within a single function.  

## Q: What is `Optional Chaining`?
A: `Optional chaining (?.)` operator accesses an object's property or calls a function. It was introduced in ES2020. If the object accesses or function called is `undefined or null`, it returns `undefined` instead of throwing an error. If the key is not present then instead of throwing key error, it returns `undefined`.

## Q: What is `Shimmer UI`?
A: `Shimmer UI` is a loading effect which show a placeholder that resembles the same structure when the actual data is loaded. This is very user-friendly as the user gets an impression of where to look for specififc information, and gets a structural view before the data is loaded.
Shimmer Ui is a smart practice that developers use for loading of their applications instead of the loading circle used to buffering.

## Q: What is the `difference` between `JS expression and JS statement`?
A: In Javascript, a statement is a standalone unit of code that acts. It typically ends with a semicolon (;) to indicate the end of the statement. Statements can be used to declare variables, assign values to variables, call functions, control program flow, and more.
```js
var x = 5; // declares a variable and assigns it a value
console.log("Hello, World!"); // calls the console.log() function to output a message
if (x > 3) { // controls program flow with an if statement
  console.log("x is greater than 3");
}
```
In contrast to statements, expressions are pieces of code that produce a value. An expression can be a literal value (such as a number or string), a variable, or a combination of operators and operands that evaluate to a value.
```js
5 + 3 // evaluates to the value 8
"Hello, " + "World!" // evaluates to the string "Hello, World!"
x // evaluates to the value of the variable x
```
The key difference between statements and expressions in JavaScript is that statements act, while expressions produce a value. Statements are executed for their side effects, while experssions are evaluated for their value. 
Another important difference between statements and expressions is that expressions can be used as part of a statement.
```js
if (x > 3) {
  console.log("x is greater than 3");
}
```

## Q: What is `Conditional Rendering`? Explain with a code example.
A: In React, `Conditional Rendering` is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interface that can adapt to changes in data and user interactions.   
There are several ways to do this:
### if Statement
```js
{
  (if (isLoggedIn){
    return <GreetUser />
  } else {
    return <GreetGuest />
  })
}
```
### Logical && Operator
```js
{isLoggedIn && <button>Logout</button>}
```
### Ternary Operator
```js
{isLoggedIn ? (return <GreetUser />) : (return <GreetGuest />)};
```

## Q: What is `CORS`?
A: `Cross-Origin Resource Sharing (CORS)` is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

## Q: What is `async and await`?
A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It is declared using `async` keyword and allows the use of `await` keyword inside it. Example-
```js
const getData = async () => {
  let data = "Hello World!";
  return data;
}
getData().then(data => console.log(data)); // Output: Hello World!
```
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait. Example-
```js
const getData = async () => {
  let data = await "Hello World!";
  console.log(data);
}
console.log("1 ");
getData();
console.log("2 ");
// Output: 1 2 Hello World!
```

## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?
A: `const json = await data.json()` ensures that you correctly handle the asynchronous nature of fetching and parsing `data` object returned by the `await.fetch(api)` makin it available for further processing in the application.
`data.json()` method lets you extract a `JSON object` from the data. It return a promise resolved to a `JSON object`.