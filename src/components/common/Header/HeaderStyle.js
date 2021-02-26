import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"rgb(255, 0, 32);",
    },
    toolbar:{
        backgroundColor:"rgb(255, 0, 32);",
        textShadow:"0px 1px 2px black",
        width: "fit-content",
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
     color: "#0067b3",
     fontWeight: "bolder !important",
     backgroundColor: "#fff",
     borderRadius:"5px 0px 0px 5px",
     textShadow:"0px 1px 2px #0067b3",

    },
     t2:{
         color: "rgb(29, 148, 0);",
         fontWeight: "bolder !important",
         backgroundColor: "#fff",
         textShadow:"0px 1px 2px rgb(29, 148, 0)",
         },

         t3:{
          color: "#f58d06;",
          fontWeight: "bolder !important",
          backgroundColor: "#fff",
          borderRadius:"0px 5px 5px 0px",
          textShadow:"0px 1px 2px #f58d06",
         },
}));
export default useStyles;

