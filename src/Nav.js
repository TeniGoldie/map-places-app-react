import React, { Component } from 'react';

class Signin extends Component {

  onSignIn (googleUser) {
    let profile = googleUser.getBasicProfile();
  }

  render(){
    return(
      <div>
        <div className="g-signin2" data-onsuccess="onSignIn">Sign In</div>
      </div>
    )
  }
}
export default Signin;
