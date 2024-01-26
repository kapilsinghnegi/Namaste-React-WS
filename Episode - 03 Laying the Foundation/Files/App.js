import React from "react";
import ReactDOM from "react-dom/client";

// Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title") 
// const header = React.createElement(
//     "div", 
//     {className: "title"}, 
//     [
//         React.createElement(
//             "h1",
//             {},
//             "This is H1 tag."
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "This is H2 tag."
//         ),
//         React.createElement(
//             "h3",
//             {},
//             "This is H3 tag."
//         ),            
//     ]
// )

// Create the `same element using JSX`
// const header = (
//     <div className="title">
//         <h1>This is H1 tag.</h1>
//         <h2>This is H2 tag.</h2>
//         <h3>This is H3 tag.</h3>
//     </div>
// )

// Create a `functional component of the same with JSX`
// - `Pass attribute` into the tag in `JSX`
// - `Composition of Component` (Add a component inside another)
// - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

const TitleComponent = () => (
    <div id="container">
        <h2>Another Component</h2>
    </div>
);
const title = (<h2>An Element</h2>);

const Header = () => {
    return (
        <div className="title">
            { title }
            <h1 style={{color:"red"}}>This is H1 tag.</h1>
            <h2 style={{color:"green"}}>This is H2 tag.</h2>
            <h3 style={{color:"blue"}}>This is H3 tag.</h3>
            <TitleComponent />
            <TitleComponent></TitleComponent>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);