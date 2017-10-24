/* global gapi */
import React, { Component } from 'react';

class Signin extends Component {

	// signIn(googleUser) {
	// 	let profile = googleUser.getBasicProfile();
	// 	localStorage.setItem('authToken', profile.getId());
	// 	localStorage.setItem('name', profile.getName());
	// 	localStorage.setItem('email', profile.getEmail());
  //   console.log("user signed in. " );
  //   console.log('Name: ' + profile.getName());
	// }

  signIn () {
    let auth2 = gapi.auth2.getAuthInstance();

    if (auth2.isSignedIn.get()) {
      let profile = auth2.currentUser.get().getBasicProfile();
      let nameResults = profile.getName();
      console.log('Name: ' + nameResults);
    }
  }

  signOut() {
    let auth2 =  gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.signIn,
    });
  }

  render(){

    return(
      <div>
        <div className="g-signin2" data-onsuccess='signIn'>Sign In</div>
        <br />
        <button onClick={this.signOut}>Sign out</button>
      </div>
    )
  }
}
export default Signin;
