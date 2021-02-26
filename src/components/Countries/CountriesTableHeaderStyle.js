import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    myTable:{
        position:"relative",
        top:"150px",
    },
    myRow:{
        color: "white",
        backgroundColor: "green"
    },
    myCell:{
         width:"70px"
    }
}));
export default useStyles;