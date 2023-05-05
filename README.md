SPRINT 8 - REACT SPACE SHIPS


EX1 - getting data from the API with axios

EX2 - linking to each ship.

       - Using a generic image when we don't have the specific picture.

       - I also added a loading animation to show while the list of ships appears.

       - Background photo by Paul Volkmer at Unsplash

      NavBar updates: 

       - using Layout with NavBar and Outlet, 

       - 100vw rather than 100% to avoid horizontal movements

      ShipPage updates:

       - Loading for ship data and its picture

       - improvement on picture display according to request status


EX3 - pagination and Infinite Scroll

      - ex3 v1 Infinite Scroll, page order inconsistent (to fix)

      - ex3 v2 Pagination - button view more

EX4 - styling updates

EX5 - welcome page

      v1 Home page without top menu visible

      v2 Home page with the top menu with highlighting of the active page 

EX6 - Login - SignUp in a same component (Login). 

      So we show each option accordingly to the option selected. 

      Therefore by clickin the login button we activate the login functionality and when clicking on Sign up, the same component provides us with the functionality to create a new user.

      There is validation of email and password

EX7 -  Private routes and CONTEXT API to prevent visiting SpaceShips without a previous Login.

EX8 - Adding pilots photos linkable to their own page information if it is available on. 

EX9 - Adding films with a structure similar to pilots' (a photo linkble to its film page).

      changed login entry dynamic with button "start" only access from Home

EX10 - testing

:::: Due to compatibility issues between testing library / jest / axios I had to modify package.json:
"test": "react-scripts test --transformIgnorePatterns node_modules/?!my-library-dir/"

and I wrapped each component tested with Provider and even with Routes when necessary.

3 Components tested: 
src/components/Login.test.js
src/components/NavBarLogin.test.js
src/pages/Home.test.js

      

       
      


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
