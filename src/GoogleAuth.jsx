import React, { useEffect, useContext, useRef } from "react";
import { AuthContext } from "./context/AuthContext";

const GoogleAuth = () => {
  const { signOut, signIn, isSignedIn } = useContext(AuthContext);

  const auth = useRef(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "211307961778-ljh837fgppubb3qe8v49h32gau6knqd3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn();
    } else {
      signOut();
    }
  };

  const onSignInClick = () => {
    auth.current.signIn(auth.current.currentUser.get().getId());
  };

  const onSignOutClick = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          SignOut
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return <div className="google-button-container">{renderAuthButton()}</div>;
};

export default GoogleAuth;
