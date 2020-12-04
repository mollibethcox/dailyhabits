import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WeeklyTracker from "./WeeklyTracker";
import CreateUser from "./CreateUser";
import LogIn from "./LogIn";
import { Provider } from "../context/habitsContext";




function App() {

  return (
    <Router>
      <div className="body">
        <Header />
        <Route path="/" exact component={WeeklyTracker} />
        <Route path="/user/register" component={CreateUser} />
        <Route path="/user/find" component={LogIn} />
        <Footer />
      </div>
    </Router>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
