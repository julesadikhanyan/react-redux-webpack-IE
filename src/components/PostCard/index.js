import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const PostCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.postDetails.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.postDetails.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PostCard;