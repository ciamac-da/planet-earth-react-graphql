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
        backgroundColor: "#f58d06;"
    },
    myRow:{
        fontSize:"30px",
        color: "#fff !important",
        backgroundColor: "rgb(29, 148, 0)",
        transition: "1s",
        "&:hover":{
            backgroundColor:"darkgreen !important",
            color:"#fff !important",
            transition: "1s"
      }
    },
    myCell:{
         width:"70px",
         textAlign:"center"
    },
    myTypo:{
        color:"#fff"
    }
}));
export default useStyles;