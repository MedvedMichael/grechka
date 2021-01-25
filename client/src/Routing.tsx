import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Navbar from "./components/navbar/navbar";

export default function Routing () {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/search" exact component={Search} />
            </Switch>
        </Router>
    )
}
