import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/checkout">Checkout</Route>
                    <Route path="/login">Login Page</Route>
                    <Route path="/">Home Page</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
