import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./navigation/RootNavigator";
import axios from "axios";
import { DATABASE_URL } from "./config/constants";


const App = () => {
  axios.defaults.baseURL = DATABASE_URL;
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
};


export default App;
