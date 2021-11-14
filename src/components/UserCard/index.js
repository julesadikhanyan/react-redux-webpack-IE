import React from "react";
import {Avatar, Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },
    avatarName: {
        display: "flex",
        '& > *': {
            margin: theme.spacing(1),
        },
        alignItems: "center",
        marginBottom: 10
    },
    status: {
        backgroundColor: theme.palette.secondary.main,
        padding: 5,
        borderRadius: 5,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        textTransform: "uppercase",
        height: 20,
    },
    userCard: {
        margin: "20px 0 20px 0",
        border: `3px solid ${theme.palette.info.light}`,
        boxShadow: "none",
        width: "70vw",
        minWidth: 500
    },
    avatar: {
        backgroundColor: theme.palette.info.light,
        marginLeft: 0
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
                        <Typography variant="h5" component="div">
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
                <Typography variant="body2" className={classes.status}>
                    {props.userDetails.status}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;