import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchUsers } from "../../redux/users/actions";
import UsersTable from "../../components/UsersTable";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            {
                users.length > 0 &&
                <UsersTable users={users}/>
            }
        </>
    )
}

export default Users;