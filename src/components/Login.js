import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomBtn from "./CustomBtn";
function Login() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_ECOMMERCE_CLIENT_ID}
    >
      <CustomBtn />
    </GoogleOAuthProvider>
  );
}

export default Login;
