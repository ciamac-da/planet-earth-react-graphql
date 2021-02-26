import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    myTable:{
        position:"relative",
        top:"150px",
    },
    myList:{
        position:"relative",
        top:"150px",
        paddingBottom:"5px",
    },
    myRow:{
        fontSize:"30px",
        color: "white !important",
        backgroundColor: "green",
        transition: "1s",
        "&:hover":{
            backgroundColor:"darkgreen !important",
            color:"white !important",
            transition: "1s"
      }
    },
    myCell:{
         width:"70px",
         textAlign:"center"
    },
    myTypo:{
        color:"white"
    }
}));
export default useStyles;