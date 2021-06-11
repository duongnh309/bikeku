import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
PaginationCompnent.propTypes = {

};
function PaginationCompnent({ pagination,setFilter,filter }) {

    const totalPages = Math.ceil(pagination.total/pagination.PageSize);
    const handleOnchange=(e,page)=>{
        setFilter({...filter,PageNumber : page})
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination style={{float:'right'}} shape="rounded"  count={totalPages} color="primary" onChange={handleOnchange} />
        </div>
    );
   
}

export default PaginationCompnent;