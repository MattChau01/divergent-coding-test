import React from 'react';
import Home from './pages/home';
import jwtDecode from 'jwt-decode';
import ParseRoute from '../client/lib/parse-route';
import VendorSignup from '../client/pages/vendor-signup';
import VendorSuccess from '../client/pages/vendor-success';
import VendorSignin from '../client/pages/vendor-signin';
import VendorHome from '../client/pages/vendor-home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash),
      user: null,
      isAuthorizing: true
    };
    this.currentPage = this.currentPage.bind(this);
    this.routeVSignin = this.routeVSignin.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });

    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({
      user,
      isAuthorizing: false
    });

  }

  routeVSignin() {
    window.location.hash = 'vendor-signin';
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({
      user: null
    });
    window.location.hash = 'vendor-signin';
  }

  currentPage() {

    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home routeVSignin={this.routeVSignin} />
      );
    }

    if (path === 'vendor-signup') {
      return (
        <VendorSignup routeVSignin={this.routeVSignin} />
      );
    }

    if (path === 'vendor-success') {
      return (
        <VendorSuccess routeVSignin={this.routeVSignin} />
      );
    }

    if (path === 'vendor-signin') {
      return (
        <VendorSignin routeVSignin={this.routeVSignin} onSignIn={this.handleSignIn} />
      );
    }

    if (path === 'vendor-home') {
      return (
        <VendorHome routeVSignin={this.routeVSignin} isAuthorizing={this.state.isAuthorizing} handleSignOut={this.handleSignOut} user={this.state.user}/>
      );
    }
  }

  render() {

    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}
