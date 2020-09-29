import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Login from "./components/Login/Login.jsx";
import { useStateValue } from "./components/StateProvider";
import { auth } from "firebase";

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth().onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
