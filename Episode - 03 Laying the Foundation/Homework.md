# Episode - 03 | Laying the Foundation

## Q: What is `JSX`?
A: `JSX` stands for JavaScript XML. It is a syntax extension of JavaScript that allows us to write HTML-like code in JavaScript. This makes it easy to write and add HTML in React applications. JSX allows us to write HTML leemnts in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags to React elements.

**Example**: 
- *Using JSX*:
```
const MyComponent = () => {
  return React.createElement('div', null, [
    React.createElement('h1', {}, 'Hello, World!'),
    React.createElement('p', {}, 'This is my React component.')
  ]);
};
```

- *Without using JSX*:
```
const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is my React component.</p>
        </div>
    );
};
```

## Q: Superpowers of `JSX`
A: Benefits of using JSX :-
- <ins>Readability</ins> : JSX code closely resembles the layout structure (HTML), Making it easier for developers to understand the structure and visual representation of the UI components.
- <ins>Maintainability</ins>  : As components grow and become more complex, JSX keeps them readable  and maintainable.
- <ins>Performance</ins> :  React can optimize JSX during the transpilation process, which can result in performance benefits in certain scenarios ensuring faster rendering.
- <ins>Safety</ins> : JSX prevents injection attacks as it escapes any values embedded in it by default.

## Q: Role of `type` attribute in script tag? What `options can I use` there?
A: The type attribute of the `<script>` element indicates the type of script represented by the element. It identifies the content of the Tag. It has a Default value which is “text/javascript”.
Common “media_type” values are: 
- text/javascript: This is the default value and is used for JavaScript code.
- text/ecmascript: This is used for ECMAScript code.
- application/javascript: This is used for JavaScript code.
- application/ecmascript: This is used for ECMAScript code.

## Q: `{ TitleComponent }` vs `{ <TitleComponent /> }` vs `{ <TitleComponent> </TitleComponent> }` in `JSX`.
A: The difference is stated below:
- `{ TitleComponent }` - This value in `JSX` is considered as `JSX` expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning
```
index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
```

- `{ <TitleComponent />}` - This value in `JSX` is meant for rendering a component (i.e) function that return JSX. This is self closing tag.
   
- `{ <TitleComponent> </TitleComponent> }` - This is same as `{ <TitleComponent /> }` if there are no child inside TitleComponent. If there are children, then those values come inside   `{ <TitleComponent>} ` and `</TitleComponent> }`. 