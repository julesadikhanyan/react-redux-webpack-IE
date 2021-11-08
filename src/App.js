import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/users" />} />
                <Route exact path="/users">
                    <Users/>
                </Route>
                <Route exact path="/posts">
                    <Posts/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;