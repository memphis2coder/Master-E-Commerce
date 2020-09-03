import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInPage from './pages/signInPage/SignInpage';
import { auth } from './firebase/firebase'; // import auth to verify user is logged in

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = { // currentUser is nothing
      currentUser : null 
    }
  }

  // lets close the user 
  unsubscribeFromAuth = null;

  // lets be aware when a user signs in and signs out; this talks to firebase
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user}) // who is the user
      console.log(user);
    })
  }

  // new lifecycle method will close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>    
        <Switch> {/* switch allows nested routes to work properly*/}
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin' component={SignInPage}/>
        </Switch>
        </div>
      );
    }
  }


export default App;
