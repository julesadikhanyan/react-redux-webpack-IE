import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import { fetchUsers } from "../../redux/users/actions";

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    });

    return (
        <h1>Users</h1>
    )
}

export default Users;