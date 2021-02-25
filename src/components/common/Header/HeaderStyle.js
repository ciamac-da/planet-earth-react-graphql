import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>({

    appBar:{
        backgroundColor:"red",
    },
    toolbar:{
        backgroundColor:"red",
        margin: "auto"
    },
  t1:{
     color: "blue",
     fontWeight: "bolder",
     backgroundColor: "white",
     borderRadius:"5px 0px 0px 5px"
     },

     t2:{
         color: "green",
         fontWeight: "bolder",
         backgroundColor: "white"
         },

         t3:{
          color: "orange",
          fontWeight: "bolder",
         backgroundColor: "white",
         borderRadius:"0px 5px 5px 0px"
         },
}));
export default useStyles;