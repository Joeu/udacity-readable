import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from "react-router-dom";
import routes from '../../routes';
import { fetchCategories } from '../../state/ducks/category/actions';
import { fetchAllPosts } from '../../state/ducks/post/actions';
import '../styles/App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <header>
          <NavLink to='/'>HOME</NavLink>
          {this.props.categories && this.props.categories.map(category =>
              <NavLink key={category.name} to={`/${category.path}/posts`}><span>| </span>{category.name}</NavLink>
            )
          }
        </header>

        <main>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </main>

        <footer>
          I`m the footer, I am on every page.
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categoriesReducer.categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
