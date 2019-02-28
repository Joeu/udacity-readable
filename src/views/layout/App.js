import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from "react-router-dom";
import routes from '../../routes';
import { fetchCategories } from '../../state/ducks/category/actions';
import { fetchAllPosts } from '../../state/ducks/post/actions';
import * as githubLogo from '../images/github_footer.png';
import '../styles/App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }

  render() {
    return (
      <div>
        <header>
          <NavLink className='nav-button' to='/'>HOME</NavLink>
          {this.props.categories && this.props.categories.map(category =>
              <NavLink className='nav-button' 
                key={category.name} 
                to={`/${category.path}/posts`}>
                  {category.name.toUpperCase()}
              </NavLink>
            )
          }
        </header>

        <main>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </main>

        <footer>
          <a href='https://github.com/Joeu'>
              <img className='footer-img' src={githubLogo} alt='Github repository.' />
          </a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categoriesReducer.categories,
  posts: state.posts.postsReducer.posts
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
