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
        backgroundColor: "#0067b3;"
    },
    myRow:{
        fontSize:"30px",
        color: "#fff !important",
        backgroundColor: "rgb(29, 148, 0)",
        transition: "1s",
        "&:hover":{
            backgroundColor:"darkgreen !important",
            color:"#fff !important",
            transform: "translateX(10px) !important",
            transition: "1s"
      }
    },
    myCell:{
         width:"70px",
         textAlign:"center",
         "&:hover":{
            transform: "translateX(10px) !important",
            transition: ".8s"
      }
    },
    myTypo:{
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bolder !important",
        margin:"-3px"
    }
}));
export default useStyles;