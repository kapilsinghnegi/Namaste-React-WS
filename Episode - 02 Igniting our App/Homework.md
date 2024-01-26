# Episode - 02 Igniting our App

## Q: What is `npm`?
A: NPM is the world's largest Software Registry. It is the default package manager for JavaScript's runtime Node.js. NPM consists of two main parts: a CLI tool for publishing and downloading packages, and an online repository that hosts JavaScript packages.

## Q: What is `Bundler`? Why do we need it?
A: A Javascript Module bundler is a tool that puts together all your JavaScript code and its dependencies and throws a new JavaScript output file with everything merged, ready for the web, commonly known as the bundle file. 
Using a JavaScript bundler becomes necessary when your project outgrows a single file or when dealing with libraries with numerous dependencies. As a result, the end-user's browser or client does not have to fetch numerous files individually.

## Q: Why is `parcel-cache`?
A: The .parcel-cache folder stores information about your project when builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze evrything form scratch. It's a key reason why parcel can be so fast in development mode.

## Q: What is `npx`?
A: The npx stands for Node Package Execute and it comes with the npm, when you install npm aabove 5.2.0 version then automatically npx will be installed. It is a  npm package runner that can execute any package that you want from the npm registry without even installing that package.

## Q: What is the difference between `dependencies and devDependencies`?
A: `Dependency` is an object that contains the library, which your project requires for production environments and functioning effectively. You require these packages to test and run your project on the localhost. You can add dependencies to the package.json file by running the below command:
``` 
npm install <dependencies>
```
`DevDependencies` are those packages in the package.json file that you need only for the project development purposes. These types of dependencies are required during the web application development process but not while testing or executing it. For adding devDependencies to your project, run the  below command:
```
npm install -D <devDependencies>
```

## Q: What is `Tree Shaking`?
A: `Tree Shaking` is a term commmonly used within a JavaScript concept to describe the removal of dead code. An unused export or import will be dropped.

## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)` allows all kinds of modules to be updated at runtime without the need for a full refresh. It retains application state which is lost during a full reload. It saves valuable development time by only updating what's changed. It instantly updates the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles in the browser's dev tools. 

## Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
A: My favourite 5 Parcel Superpowers are:
- `HMR (Hot Module Replacemet)`: updates modules at runtime without a full reload.
- `Minification`: Reduces the file size of the output bundles.
- `Image Optimization`: Lossless image optimization for JPEGs and PNGs which reduces the size of images without affecting their quality. 
- `Code Splitting`
- `Content Hashing`

## Q: What is `.gitignore`? What should we add and not add into it?
A: The `.gitignore` file is a text file that tells Git which files or folders to ignore in a project. It is usually placed in a root directory of a project. Thetype of files you should add to .gitignore file are the files that do not need to get committed.

## Q: What is the difference between `package.json` and `package-lock.json` files?
A: `package.json` contains basic information about the project. It is mandatory for every project. It records important metadata about the project. It contains information such as name, description, author, script, and dependencies.

`package-lock.json` describes the exact tree that was generated to allow subsequent installs to have the identiacl tree. It is automatically generated for those operations where npm modifies either node_modules tree or package.json. It allows future devs to install the same dependencies in the project. It contains the name, dependencies, and locked  version of the project. 

## Q: Why should I not modify `package-lock.json`?
A: You should not change `package-lock.json` directly because that is being handled automatically by NPM. It reflects changes made to `package.json` to `package-lock.json` and keeps it up to date. However, theis only happens if you use NPM's CLI to make changes. If you manually change `package.json`, don'tt expect `package-lock.json` to update. 

## Q: What is `node_modules`? Is it a good idea to push that on git?
A: `node-modules` are automatically generated files that gets created by npm to store the modules needed for your project when you install a package to Node.js project. 
It is not a good idea to push that to git as the file is large and can be regenerated.  

## Q: What is the `dist` folder?
A: A `dist` folder is a folder to generate builds. Dist keeps files minified for us.  

## Q: What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
A: `Browserslists` is a tool that allows specifying which browsers should be supported in your frontend app by specifying 'queries' in a config file.