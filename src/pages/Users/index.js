import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {fetchUsers, setActiveUsersPage} from "../../redux/users/actions";
import UsersTable from "../../components/UsersTable";
import { CLEAR_STORE_USERS } from "../../redux/users/actionsType";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const pages = useSelector(state => state.usersReducer.usersPages);
    const activeUsersPage = useSelector(state => state.usersReducer.activeUsersPage);

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

    return (
        <>
            {
                users.length > 0 &&
                <UsersTable users={users} pages={pages} activeUsersPage={activeUsersPage} fetch={fetch}/>
            }
        </>
    )
}

export default Users;