import React from "react";

import "./App.css";

import { ReactSession } from "react-client-session";


import Register from "./components/Register.pages";
import Login from "./components/Login_page";
import Home from "./components/home_page";
import About from "./components/About_page";
import ContactUs from "./components/ContactUs_page";
import AddBook from "./components/AddBook_page";
import Basket from "./components/Basket"
import YourBooks from "./components/Your_Books";

import { BrowserRouter, Route, Switch } from "react-router-dom";



ReactSession.setStoreType("localStorage");
function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
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
            <Route path="/shop">
              <Basket />
            </Route>
            <Route path="/yourBooks">
              <YourBooks />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
