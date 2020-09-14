import React, { useState } from "react";
import "./App.css";
import LoginForm from "./Pages/LoginForm/LoginForm";
import SignupForm from "./Pages/SignupForm/SignupForm";
import TimeLine from "./Pages/TimeLine/TimeLine";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { Switch, Route, Redirect } from "react-router-dom";
import AddAssumptions from "./Pages/AddAssumptions/AddAssumptions";

function App() {
  var [login, setLogin] = useState(true);

  return (
    <div className="App">
      <Navbar login={login} />

      <div className="pageContent">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />

          <Route path="/timeline" component={TimeLine} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/addassumption" component={AddAssumptions} />
          {/* <Redirect to = "/" exact to ="/timeline"/> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
