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
    // onAuthStateChanged is method from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // from auth import
      // check if a user signs in
      if (userAuth) { // if a new user is made
        // userRef is used to check if our database/user has updated & a refering to the user
        // createUserProfileDocument is a method from firebase
        const userRef = await createUserProfileDocument(userAuth);
        // You can listen to a document with the onSnapshot() method from firebase
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : { // from this.state
              id: snapShot.id, // i want the id 
              ...snapShot.data() // i also want the rest of the data
            }
          }, () => {
            console.log(this.state) // console the the user to see the data; console.log inside the function
          });
        });
        
      } else {
        this.setState({currentUser : userAuth }) // when the user logs out set the user to null; ** why is userAuth null?
      }
    })
  };

  // new lifecycle method will close the subscription
  componentWillUnmount() { // unmounting the user
    this.unsubscribeFromAuth(); // signing out 
  };

  render() {
    return (
      <div className="App">
        <Header />    
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
