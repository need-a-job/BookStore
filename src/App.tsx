import React from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ReactSession } from "react-client-session";


import Register from "./components/Register.pages";
import Login from "./components/Login_page";
import Home from "./components/home_page";
import About from "./components/About_page";
import ContactUs from "./components/ContactUs_page";
import AddBook from "./components/AddBook_page";
import Footer from "./components/Footer_page"

function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <div className="App">
      <div className="form-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/register">
              <Register name={""} email={""} password={""} isBizz={false} />
            </Route>
            <Route path="/login">
              <Login email={""} password={""} isBizz={false} />
            </Route>
            <Route path="/addBook">
              <AddBook />
            </Route>
            <Route path="/footer">
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
