import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import axios from "axios"
function setTokensInCookies(accessToken, refreshToken) {
  document.cookie = `access_token=${accessToken}; path=/`;
  document.cookie = `refresh_token=${refreshToken}; path=/`;
}
// async function getClientInfo(token) {
//   try {
//     const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const userDetails = response.data;
//     console.log(userDetails);
//     return userDetails;
//   } catch (error) {
//     console.error('Error fetching user details', error);
//   }
// }
async function generateTokens(code, navigate) {
  const tokenEndpoint = "https://accounts.google.com/o/oauth2/token";
  const clientId = process.env.REACT_APP_GOOGLE_ECOMMERCE_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_GOOGLE_ECOMMERCE_SECRET_ID;
  const redirectUri = "http://localhost:3000";
  const authorizationCode = code;
  const requestBody = new URLSearchParams();
  requestBody.append("grant_type", "authorization_code");
  requestBody.append("code", authorizationCode);
  requestBody.append("client_id", clientId);
  requestBody.append("client_secret", clientSecret);
  requestBody.append("redirect_uri", redirectUri);
  try {
    let res = await fetch(tokenEndpoint, {
      method: "POST",
      body: requestBody,
    }).then((x) => x.json());
    console.log("logged in");
    navigate("/");
    setTokensInCookies(res.access_token, res.refresh_token);
  } catch (error) {
    console.error("Token Exchange Error:", error);
  }
}
function CustomBtn() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("codeResponse", codeResponse);
      generateTokens(codeResponse?.code, navigate);
    },
    flow: "auth-code",
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-gray-400 rounded p-4">
        <h2 className="text-lg font-bold mb-4">Sign In</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => login()}
        >
          Sign in with Google 🚀
        </button>
      </div>
    </div>
  );
}

export default CustomBtn;
