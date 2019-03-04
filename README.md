This is the final project regarding Udacity's React-Redux course section.

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn install`

and then:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Project Structure`

The project was built following the [ducks](duhttps://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638becks) approach with two major directories: state and views.

The first one contains all the Redux logic, and the second, the React component files.

The state directory holds the ducks for each application logical 'piece' with its own actions and reducers, and also a logger middleware from where the developer can follow the state after the trigger of each event.

Inside the views directory, components are separated by the `presentational/container` pattern.