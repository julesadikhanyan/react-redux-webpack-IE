import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchUsers } from "../../redux/users/actions";
import UsersTable from "../../components/UsersTable";
import { CLEAR_STORE_USERS } from "../../redux/users/actionsType";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const pages = useSelector(state => state.usersReducer.pages);

    useEffect(() => {
        dispatch(fetchUsers(1));
        return () => {
            dispatch({ type: CLEAR_STORE_USERS })
        }
    }, []);

    const fetch = (page) => {
        dispatch(fetchUsers(page));
    }
    return (
        <>
            {
                users.length > 0 &&
                <UsersTable users={users} pages={pages} fetch={fetch}/>
            }
        </>
    )
}

export default Users;