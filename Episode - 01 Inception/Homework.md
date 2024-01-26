# Episode 01 - Inception

## Q: What is `Emmet`? 
A: `Emmet` is an essential development tool that helps you quickly `create repetitive structures` like lists, tables, or ordered table with minimal typing.

## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` is a network of interconnected servers that speeds up a webpage loading for data-heavy applications. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If a user is located far from that server it will take a long time to load a large file. Instead, the website content is stored on CDN servers geographicaly closer to the users and reaches their computer much faster.

## Q: Why is `React known as React`?
A: `React` is named React because it `reacts quickly to changes without reloading` the whole page. It uses virtual DOM to efficiently update parts of a webpage. It's built around components that 'react' and update.

## Q: What is the `crossorigin` attribute?
A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. Webpages often make requests to load resources on other servers using crossorigin request. CORS stands for Cross-origin Resource Sharing, and is a mechanism that allows resources on a webpage to be requested data from another domain outside their own domain.

## Q: What is the difference between `React and ReactDOM`?
A: `React` is a javascript library, designed for building better user interfaces, whereas `React-DOM` is a complimentary library to React which glues to the browser DOM. React-DOM binds the idea of React to a web browser. 

## Q: What is the difference between `react.development.js and react.production.js` files via CDN?
A: The development link is typically used during the devlopment phase of your application. It includes additional debugging tools, warnings, and helpful error messages. It is larger in size and may negatively impact the performance of your application. It is not optimised for producton use.
The production link is meant for deploying your application in a production environment. It excludes development-specific tools, warnings, amd error messages. It is smaller in file size, which improves the performance of your application. It is optimized for production use.