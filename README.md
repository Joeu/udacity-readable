# Post/Comment React-Redux project

### That's a fully functional post/comment application for Udacity's React nanodegree program

### `Get the project up running`

In the project directory, you can one of the options below:

```
npm install 

yarn install
```

and then (also one of the following):

```
npm start

yarn start
```

Finally, open [http://localhost:3000](http://localhost:3000) to view the application in the browser.


### `Project Structure`

The project was built following the [ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) approach with two major directories: state and views.

The first one contains all the Redux logic, and the second, the React component files.

The state directory holds the ducks for each application logical 'piece' with its own actions and reducers, and also a logger middleware from where the developer can follow the state after the trigger of each event.

Inside the views directory, components are separated by the `presentational/container` pattern.