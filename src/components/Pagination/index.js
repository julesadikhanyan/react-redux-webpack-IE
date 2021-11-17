import React from "react";
import { makeStyles } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    pagination: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        marginBottom: 10
    }
}));

const Pages = (props) => {
    const classes = useStyles();

    const [page, setPage] = React.useState(props.activePage);

    const handleChange = (event, value) => {
        setPage(value);
        props.fetch(value);
    };

    return (
        <div className={classes.pagination}>
            <Pagination color="secondary" count={props.pages} page={page} onChange={handleChange} />
        </div>
    )
}

export default Pages;