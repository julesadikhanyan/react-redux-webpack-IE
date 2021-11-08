import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import UserCard from "../../components/UserCard";
import { fetchUser } from "../../redux/user/actions";

const User = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(params));
    }, []);

    const userDetails = useSelector(state => state.userReducer.userDetails);

    return (
        <>
            {
                Object.keys(userDetails).length > 0 &&
                <UserCard userDetails={userDetails}/>
            }
        </>
    )
};

export default User;