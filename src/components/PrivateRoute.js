import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Element }) => {
  const navigate = useNavigate();
  const [auth, setauth] = useState(false);
  async function checkAccessTokenValidity(accessToken) {
    const tokenInfoUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`;
    try {
      const response = await fetch(tokenInfoUrl);
      if (response.ok) {
        setauth(true);
        return true;
      } else {
        console.log("Error:", response);
        setauth(false);
        navigate("/login");
        return false;
      }
    } catch (error) {
      console.log("Error:", error);
      setauth(false);
      navigate("/login");
      return false;
    }
  }
  function getCookieValue(cookieName) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        const value = cookie.substring(cookieName.length + 1);
        return decodeURIComponent(value);
      }
    }
    return null;
  }
  const myCookieValue = getCookieValue("access_token");
  checkAccessTokenValidity(myCookieValue);
  return auth ? <Element /> : <div>Not authorized</div>;
};

export default PrivateRoute;
