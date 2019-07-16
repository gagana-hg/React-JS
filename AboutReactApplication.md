## __Create your first react app:__  

We can create react app using 2 ways
1.  `npx create-react-app {app-name}` :  __npx__ is a npm package runner, this will take care of react installation we don’t need to worry.
2.  `npm install create-react-app -g` : __npm__ will install react app globally.

Then use `create-react-app {app-name}` 

__create-react-app__ is a command line interface tool with no configuration required.
A new folder is created with app name, navigate into the folder with __cd__ command.
`npm start` on terminal will open the application on browser *(localhost: 3000)*


## Folder Structure  

1.  **package.json** - Contain dependencies and packages required for project.
2.  **node_modules** - All dependencies are installed and generated when we create app.
3.  **public folder**: 
      1. **index.html** - React will control the UI, we won’t make any changes in this file
           only one <div> tag with `id = "root"`
4.  **src folder**: 
     1. **index.js** - We specify root component** and DOM component which will be controlled by react, `id ="root"`,
          everything inside this *id* will be controlled by react. App component is rendered inside root DOM node
     2. **App.js** - Responsible for HTML display in the browser.
     3. **App.css** - For styling purpose.
     4. **index.css** - Applies styles on body tag.

**What happens when we run** `npm start` **?**  

  `index.html` is served in the browser which contains *root* DOM node, next it enters to `index.js` here ReactDOM renders the 
  *app* component onto the *root* DOM node. App component (App.js) contains the HTML code which is ultimately displayed in the browser.



