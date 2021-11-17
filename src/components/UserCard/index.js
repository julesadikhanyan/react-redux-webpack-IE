import React from "react";
import {Avatar, Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    userCard: {
        margin: "20px 0 20px 0",
        border: `3px solid ${theme.palette.info.light}`,
        boxShadow: "none",
        minWidth: 400,
        boxSizing: "border-box",
        width: "60vw"
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },
    avatarName: {
        display: "flex",
        alignItems: "center",
        '& > *': {
            margin: theme.spacing(2, 1),
        }
    },
    avatar: {
        backgroundColor: theme.palette.info.light,
        marginLeft: 0
    },
    status: {
        backgroundColor: theme.palette.secondary.main,
        padding: 5,
        borderRadius: 5,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textTransform: "uppercase",
        height: 20,
    }
}));
const UserCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.userCard}>
            <CardContent className={classes.cardContent}>
                <div>
                    <div className={classes.avatarName}>
                        <Avatar className={classes.avatar}/>
                        <Typography variant="h5">
                            {props.userDetails.name}
                        </Typography>
                    </div>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        <strong>Email:</strong> {props.userDetails.email}
                    </Typography>
                    <Typography>
                        <strong>Gender:</strong> {props.userDetails.gender}
                    </Typography>
                </div>
                <Typography className={classes.status}>
                    {props.userDetails.status}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;