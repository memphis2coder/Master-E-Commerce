import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInPage from './pages/signInPage/SignInpage';
import { auth, createUserProfileDocument } from './firebase/firebase'; // import auth to verify user is logged in

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = { // currentUser is nothing
      currentUser : null 
    }
  };

  // lets close the user 
  unsubscribeFromAuth = null;

  // lets be aware when a user signs in and signs out; this talks to firebase
  // step 2: store the data in the state of our app to use it in our app. 
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if a user signs in
      if (userAuth) { // if a new user is made
        // userRef is used to check if our database has updated that that reference
        const userRef = await createUserProfileDocument(userAuth);
        // You can listen to a document with the onSnapshot() method
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          });
        });
        
      } else {
        this.setState({currentUser : userAuth }) // when the user logs out set the user to null
      }
    })
  };

  // new lifecycle method will close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

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
