import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { authentication } from "./GuardedRoute";
import { UserContext } from "../UserContext";

const clientId =
  "357348957806-h9b7jj8fo250agihnjkt3a994digvdet.apps.googleusercontent.com";



function Login() {

 const {userDetails, setUserDetails} = useContext(UserContext)

  const history = useHistory();
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setUserDetails(res.profileObj)
    authentication.onAuthentication();
    history.push("/home");
  };
  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="container">
      <div>
        <img src="favicon.png" alt="" />
      </div>
      <div className="login-button">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In With Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          theme="dark"
        />
      </div>
    </div>
  );
}
export default Login;
export { clientId };

