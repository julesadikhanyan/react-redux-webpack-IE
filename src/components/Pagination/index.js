import React from "react";
import { makeStyles } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: "flex",
        justifyContent: "center"
    },
}));

const Pages = (props) => {
    const classes = useStyles();

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        props.fetch(value);
    };

    return (
        <div className={classes.root}>
            <Pagination color="secondary" count={props.pages} page={page} onChange={handleChange} />
        </div>
    )
}

export default Pages;