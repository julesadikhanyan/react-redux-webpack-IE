import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import UserCard from "../../components/UserCard";
import { fetchUser } from "../../redux/user/actions";
import {CLEAR_STORE_USER} from "../../redux/user/actionsType";
import UserPostsTable from "../../components/UserPostsTable";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import {makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    userContainer: {
        width: "60vw",
        margin: "auto",
        marginTop: 20
    },
    userTitle: {
        fontWeight: "bold",
        textAlign: "center"
    },
    userCard: {
        margin: "20px 0 20px 0"
    },
    userDetails: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    alert: {
        width: "100%"
    }
}));
const User = () => {
    const classes = useStyles();
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(params));
        return () => {
            dispatch({ type: CLEAR_STORE_USER });
        }
    }, []);

    const userDetails = useSelector(state => state.userReducer.userDetails);
    const userPosts = useSelector(state => state.userReducer.userPosts);
    const loading = useSelector(state => state.userReducer.loading);
    const error = useSelector(state => state.userReducer.userError);
    const userPostsError = useSelector(state => state.userReducer.userPostsError);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return (
            <Alert className={classes.alert} severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{error}</strong>
            </Alert>
        )
    }

    return (
            <div className={classes.userContainer}>
                <BackButton/>
                <div className={classes.userDetails}>
                    <Typography className={classes.userTitle} variant="h4">User Details</Typography>
                    {
                        Object.keys(userDetails).length > 0 &&
                        <UserCard className={classes.userCard} userDetails={userDetails}/>
                    }
                    <Typography className={classes.userTitle} variant="h4">User Posts</Typography>
                    {
                        userPosts && userPosts.length > 0 ?
                            <UserPostsTable userPosts={userPosts}/> :
                            userPostsError ?
                            <Alert className={classes.alert} severity="error">
                                <AlertTitle>Error</AlertTitle>
                                <strong>{userPostsError}</strong>
                            </Alert> :
                            <Typography>The user has no posts</Typography>
                    }
                </div>
            </div>
    )
};

export default User;