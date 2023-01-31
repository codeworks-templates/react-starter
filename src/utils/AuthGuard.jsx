import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return navigate('/');
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