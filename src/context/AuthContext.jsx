import React, { useReducer, createContext } from "react";

export const AuthContext = createContext();

const initialState = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...initialState,
        isSignedIn: true,
        userId: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...initialState,
        isSignedIn: false,
        userId: null,
      };
    default:
      return initialState;
  }
};

const AuthContextProvider = (props) => {
  const [{ isSignedIn }, dispatch] = useReducer(authReducer, initialState);

  const signIn = (userId) => {
    dispatch({ type: "SIGN_IN", payload: userId });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isSignedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
