# Episode - 04 | Talk is cheap, show me the code!

## Q: Is `JSX` mandatory for React?
A: Creating React app without `JSX` is not mandatory as `JSX` is nota part of React but we prefer using `JSX` because it allows writing HTML-like JavaScript syntax in React to create React elements and for calling React.
It is used to make development in React easy and is more clean, readable, more secure, and optmised.

## Q: Is `ES6` mandatory for React?
A: `ES6` (ECMAScript 6) is not mandatory for using React, but it is highly recommended. The latest React project uses ES6 features because it enhances the ability to work with React components effectively.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The difference is stated below:
- `{ TitleComponent }` - This value in `JSX` is considered as `JSX` expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning
```
index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
```

- `{ <TitleComponent />}` - This value in `JSX` is meant for rendering a component (i.e) function that return JSX. This is self closing tag.
   
- `{ <TitleComponent> </TitleComponent> }` - This is same as `{ <TitleComponent /> }` if there are no child inside TitleComponent. If there are children, then those values come inside   `{ <TitleComponent>} ` and `</TitleComponent> }`. 

## Q: How can I write `comments` in JSX?
A: While `JSX` is written a lot like `HTML`, you can't write comments as you do in the `HTML`&`XML`, it throws Unexpected token error.
```
<!-- HTML Comment here -->
```
To write comments in JSX, you need to use JavaScript’s forward-slash and asterisk syntax, enclosed inside a curly brace 
```
{/* JSX comment here */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A:`<React.Fragment></React.Fragment>` and `<></>` are used to group elements together in React. `<React.Fragment></React.Fragment>` is used to group elements together in situations where you need a single element. It is one of the valid values for ReactNode. `<></>` is the shorthand for `<React.Fragment></React.Fragment>` in most cases. It is used to wrap nodes without rendering extra element to the DOM. It can be used in the same way you would use any other element.<br>
### Uses:
This throws an error complaining that ‘JSX expressions must have one parent element’. 
```
const Users = () => {
  return (
      <li>Tommy</li>
      <li>Mike</li>
      <li>Anna</li>
  )
}
```
This can be solved by wrapping them inside a div but it will change the DOM structure of the application.
const Users = () => {
```
  return (
    <div>
      <li>Tommy</li>
      <li>Mike</li>
      <li>Anna</li>
    </div>
  )
}
```
Instead of using <React.Fragment>…</React.Fragment>, we can simply use <>…</>
```
const Users = () => {
  return (
    <>
      <li>Tommy</li>
      <li>Mike</li>
      <li>Anna</li>
    </>
  )
}
```

 That's right, the li elements are wrapped with that extra div element that we were forced to add. Instead of using div, we can use the Fragment.
```
const Users = () => {
  return (
    <React.Fragment>
      <li>Tommy</li>
      <li>Mike</li>
      <li>Anna</li>
    </React.Fragment>
  )
}
```
One important thing to note here is that the short syntax doesn’t support passing attributes to it. In some cases, you may wanna pass a key property to the parent level element. This usually happens when using JS `map()`.

## Q: What is `Reconciliation` in React?
A: In React, when the state of a component changes, the component needs to update its UI to reflect the new state. This process of updating the UI is called `Reconciliation`. React uses a Virtual DOM (VDOM) to perform reconciliation, which is used to compare a component’s current and previous states.

## Q: What is `React Fiber`?
A: `Fiber` is a new reconciliation algorithm introduced in React 16 that aims to improve the performance of React applications by making the reconciliation process more efficient. It does that by allowing the reconciliation process to be broken down ito smaller chunks and scheduled over multiple frames rather than being completed in a single frame. Fiber divides the reconciliation work into smaller units called `Fibers`. 
Each Fibre represents a single element in the VDOM tree, and the reconciliation process is performed on each Fiber individually. This allows React to prioritize the reconciliation of certain fibers over others, depending on the importance of the updates.

## Q: Why do we need `keys` in React?
A: The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. Unique IDs are the best value to assign to keys. 

## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## Q: What is `props in React`? Ways to.
A: `props` in React stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another(from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.<br>
Examples:
```
function App() {
  return (
    <div className="App">
      <Name name="KSN" /> // name are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?
A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use it to make application dynamic. It is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.