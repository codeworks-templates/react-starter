import React, { useEffect, useState } from "react";
import { AuthService } from "../services/AuthService.js";

const AuthGuard = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return AuthService.loginWithRedirect({
        appState: {
          targetUrl: location.hash
        }
      })
    }
    setIsLoggedIn(true);
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return (
    <React.Fragment>
      {
        // eslint-disable-next-line react/prop-types
        isLoggedIn ? props.children : null
      }
    </React.Fragment>
  );
}
export default AuthGuard;