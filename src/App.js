import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                {/* <Home /> */}
                <Switch>
                    <Route path="/checkout">Checkout</Route>
                    <Route path="/login">Login Page</Route>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
