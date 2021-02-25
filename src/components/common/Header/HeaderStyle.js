import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"red",

    },
    toolbar:{
        backgroundColor:"red",
        textShadow:"0px 1px 2px black",
        "&:hover":{
        transform: "translateX(10px) !important"
      },
      [theme.breakpoints.down('sm')]: {
        margin: "auto"
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: "1px",
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: "1px",
      },
    },
  t1:{
     color: "blue",
     fontWeight: "bolder",
     backgroundColor: "white",
     borderRadius:"5px 0px 0px 5px",
    },
     t2:{
         color: "green",
         fontWeight: "bolder",
         backgroundColor: "white",
         },

         t3:{
          color: "orange",
          fontWeight: "bolder",
         backgroundColor: "white",
         borderRadius:"0px 5px 5px 0px",
         },
}));
export default useStyles;

