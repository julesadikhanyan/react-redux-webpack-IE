import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fetchUsers, setActiveUsersPage} from "../../redux/users/actions";
import UsersTable from "../../components/UsersTable";
import { CLEAR_STORE_USERS } from "../../redux/users/actionsType";
import Loading from "../../components/Loading";
import {makeStyles, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    usersList: {
        margin: "auto",
        width: "60vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20
    },
    usersTitle: {
        fontWeight: "bold",
    }
}));

const Users = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const pages = useSelector(state => state.usersReducer.usersPages);
    const activeUsersPage = useSelector(state => state.usersReducer.activeUsersPage);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.usersError);

    useEffect(() => {
        dispatch(fetchUsers(activeUsersPage));
        return () => {
            dispatch({ type: CLEAR_STORE_USERS })
        }
    }, []);

    const fetch = (page) => {
        dispatch(setActiveUsersPage(page));
        dispatch(fetchUsers(page));
    }

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{error}</strong>
            </Alert>
        )
    }

    return (
        <>
            <div className={classes.usersList}>
                <Typography className={classes.usersTitle} variant="h4">Users List</Typography>
                <Typography>Page: {activeUsersPage}</Typography>
                {
                    users.length > 0 &&
                    <UsersTable
                        users={users} pages={pages}
                        activeUsersPage={activeUsersPage}
                        fetch={fetch}/>
                }
            </div>
        </>
    )
}

export default Users;