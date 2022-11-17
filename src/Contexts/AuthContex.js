import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../service/Api';

// interface AuthContextData {
//   authentication: Boolean;
//   // signin(): Promise<void>;
//   // acessToken: String;
// }

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);
  const [acessToken, setAcessToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Data Perssist
  useEffect(() => {
    async function loadStorageData() {
      const tokenData = await AsyncStorage.getItem("acessToken");

      if (tokenData) {
        console.log('ASYNCSTORAGE ' + JSON.parse(tokenData))
        setAcessToken(JSON.parse(tokenData))
        setAuthentication(true)
        setIsLoading(false)
      }
    }
    loadStorageData();
  }, []);

  // Sign-In
  async function signin(username, password) {
    let json = await Api.signIn(username, password)
    if (json.access) {
      await AsyncStorage.setItem("acessToken", JSON.stringify(json.access));
      setAuthentication(true)
    }
  }

  // Sign-Out
  function signout() {
    AsyncStorage.clear().then(() => {
      setAuthentication(false);
    });
  }


  return (
    <AuthContext.Provider value={{ authentication, isLoading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function AuthMain() {
  const context = useContext(AuthContext);
  return context;
}