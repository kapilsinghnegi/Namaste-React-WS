# Episode - 05 | Let's get Hooked

## Q: What is the `difference` between `Named export`, `Default export`, and `* as export`?
A: `Named Export` allows you to export multiple entities from a file with specific names. When importing, you can use the same names surrounded in `{}` to refer to the exported values. 
```javascript
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```
```javascript
// e.g. importing a single named export
 import { add } from "./add";

// e.g. importing multiple named exports
 import { add, sub } from "./Component";

// e.g. giving a named import a different name by using "as":
 import { add as AddComponent } from "./AddComponent";
```

`Default Export` are used to export a single primary entity from a module. There can only be one default export per module. When importing, you can assign a custom name to the default export.
```javascript
const myFunc = () => {/* ... */};
export default myFunc;
```
```javascript
// e.g. importing default export
import Component from "./Component";
```
We can use `Named export` and `Default export` together.
```javascript
export const MyComponent = () => {}
const MyComponent2 = () => {}
export default MyComponent2;
```
To import them together, we can just:
```javascript
import {MyComponent}, MyComponent2 from "./MyComponent";
```

`* as export`(Wildcard Export) allows you to export all entitiess from a module. When importing, you can access all exported values using a namespace. 
```javascript
export const num = 7;
export const word = "hello";
export const MyComponent = () => {} 
```
```javascript
import * as myModule from './myModule>';
console.log(myModule.num); // 42
console.log(myModule.word); // hello
<MainComponent.MyCommponent />
```

## Q: What are `React Hooks`?
A:In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple Javscript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your compomet hierarchy. this makes it easy to share Hooks among many components or with the community.
Each React Hook name starts with the prefix "use." Hooks simplify state management, enhance code readability, and make functional components more powerful and expressive.

Some frequently used built-in React Hooks:
- useState: Allows us to track state in a function component. A state is an object that holds information about a certain component. Returns a  stateful value and an updater function updates it.
- useEffect: Allows you to run a side effect on your component. Side effect basically means something that happens after some other specific thing happens like API calls, subscriptions, timers, mutations, and more.
- useContext: Used to manage state globally.
- useRef: Allows you to persist values between renders.It is used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
- useReducer: Allows for custom state logic. 
- useCallback: Returns a memoized callback function. This allows us to isolate resource intensive functions so that they will not automatically run on every render.
- useMemo: Returns a memoized value that helps in performance optimizations. 

## Q: Why do we need `useState Hook`?
A: The useState Hook in React is a powerful tool that allows you to manage state within functional components. 

To use the useState Hook, we first need to import it into our component.
```javascript
import { useState } from "react";
```
We initialize our state by calling useState in our function component. The `useState` accepts an initial state and returns two values- the current stateand a function that updates the state. Lastly, we set the initial state to an empty string: `useState("")`
```javascript
const [color, setColor] = useState("");
```
We can now include our state anywhere in our component. To update our state, we use our state updater function.
```javascript
const [color, setColor] = useState("red");
function FavoriteColor() {
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
```