import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const UserCard = (props) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Name - {props.userDetails.name}
                </Typography>
                <Typography variant="h5" component="div">
                    Email - {props.userDetails.email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Gender - {props.userDetails.gender}
                </Typography>
                <Typography variant="body2">
                    Status - {props.userDetails.status}
                    <br />
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;