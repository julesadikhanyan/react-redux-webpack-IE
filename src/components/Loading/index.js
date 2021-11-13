import React from "react";
import {Box, CircularProgress} from "@material-ui/core";

const Loading = () => {
    return (
        <Box margin="-75px 0 0 -75px" width="150px" height="150px" position="absolute" top="50%" left="50%">
            <CircularProgress size={150}/>
        </Box>
    )
}

export default Loading;