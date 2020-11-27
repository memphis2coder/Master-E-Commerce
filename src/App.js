import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// components
import Header from './components/header/Header';
// pages
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignInPage from './pages/signInPage/SignInpage';
// firebase
import { auth, createUserProfileDocument } from './firebase/firebase'; // import auth to verify user is logged in
// redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';
// reselector
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  // lets close the user 
  unsubscribeFromAuth = null;

  // lets be aware when a user signs in and signs out; this talks to firebase
  // step 2: store the data in the state of our app to use it in our app. 
  componentDidMount() {
    const {setCurrentUser} = this.props;
    // onAuthStateChanged is method from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // from auth import
      // check if a user signs in
      if (userAuth) { // if a new user is made
        // userRef is used to check if our database/user has updated & a refering to the user
        // createUserProfileDocument is a method from firebase
        const userRef = await createUserProfileDocument(userAuth);
        // You can listen to a document with the onSnapshot() method from firebase
        userRef.onSnapshot(snapShot => {
            setCurrentUser({ // from this.state
              id: snapShot.id, // i want the id 
              ...snapShot.data() // i also want the rest of the data
            });
          });
        }
        
        setCurrentUser(userAuth) // when the user logs out set the user to null; ** why is userAuth null?
    });
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/* redirect user to the homepage if they have signed in */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
        </Switch>
        </div>
      );
    }
  }
  // this function allows me the get the current user to use in redirect
  const mapStateToProps =  createStructuredSelector({
    // using reselect
    currentUser: selectCurrentUser // this comes from user.selector
  });

  // my app doesnt need current user data, app only sets it
const mapDispatchToProps = (dispatch) => ({
  // return a object
  // dispatch is a way for redux to pass to every reducer
  // user comes from user.action.js 
  setCurrentUser: user => dispatch(setCurrentUser(user)) // this pass to every reducer 
})

export default connect(mapStateToProps, mapDispatchToProps)(App); // we dont need current user value so its null
