import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from "react-router-dom";
import routes from '../../routes';
import { fetchCategories } from '../../state/ducks/category/actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    console.log(this.props);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <header>
        <Link to='/'>HOME</Link>
        {this.props.categories && this.props.categories.map(
          category =>
            <Link key={category.name} to={`/categories/${category.path}`}>{category.name}</Link>
          )
        }
        </header>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}

        <footer>
          I`m the footer, I am on every page.
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
