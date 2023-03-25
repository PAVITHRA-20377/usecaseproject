//import logo from './logo.svg';
import React from 'react';
//import './App.css';
import firebase from 'firebase/compat/app';


class App extends React.Component {
  handlechange=(e)=>{
    const {name,value}=e.target
    this.setState({
      [name]:value
    })
  }
  configureCaptcaha=()=>{
       window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
       // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptcha varified")
     },
     defaultCountry :"IN"
    });
  }
  onSignInSubmit=(e)=>{
    e.preventDefault()

    this.configureCaptcaha()    
    const phoneNumber = this.state.mobile
    console.log(phoneNumber)

    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber( phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("OTP has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent")
    });
  }
  render(){
    return(
      <div>
   
        <h2>Get started</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="text" name="mobile" placeholder="Mobile/Email id" required onChange={this.handleChange}/>
          <br/><br/>
          <button type="submit"  >Continue</button>
        </form>
        <div>
          <h2>Enter OTP</h2>
          <p>We have sent one time password(OTP)to ****2163</p>
          <input type="number"  name="otp" placeholder="OTP" required onChange={this.handleChange}/>
          <br/><br/>
          <p>Resend OTP in</p>
          </div>
      </div>
    )
  }
}
export default App;

