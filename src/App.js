import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

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
                <Route exact path="/users/:id">
                    <User/>
                </Route>
                <Route exact path="/post/:id">
                    <Post/>
                </Route>
                <Route exact path="/new_post">
                    <CreatePost/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;