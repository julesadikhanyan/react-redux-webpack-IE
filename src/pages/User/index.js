import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import UserCard from "../../components/UserCard";
import { fetchUser } from "../../redux/user/actions";
import {CLEAR_STORE_USER} from "../../redux/user/actionsType";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import {makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import PostsTable from "../../components/PostsTable";
import Error from "../../components/Error";

const useStyles = makeStyles(() => ({
    userTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    alert: {
        width: "100%",
        boxSizing: "border-box"
    }
}));
const User = () => {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userReducer.userDetails);
    const userPosts = useSelector(state => state.userReducer.userPosts);
    const loading = useSelector(state => state.userReducer.userLoading);
    const error = useSelector(state => state.userReducer.userError);
    const userPostsError = useSelector(state => state.userReducer.userPostsError);

    useEffect(() => {
        dispatch(fetchUser(params.id));
        return () => {
            dispatch({ type: CLEAR_STORE_USER });
        }
    }, []);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
            <div className="container">
                <div className="buttonContainer">
                    <BackButton/>
                </div>
                <div>
                    <Typography className={classes.userTitle} variant="h4">User Details</Typography>
                    <UserCard userDetails={userDetails}/>
                    <Typography className={classes.userTitle} variant="h4">User Posts</Typography>
                    {
                        userPosts && userPosts.length > 0 ?
                            <PostsTable posts={userPosts}/> :
                            userPostsError ?
                            <Alert className={classes.alert} severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <strong>{userPostsError}</strong>
                            </Alert> :
                            <Typography align="center">The user has no posts</Typography>
                    }
                </div>
            </div>
    )
};

export default User;