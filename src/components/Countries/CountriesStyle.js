import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    myTable:{
        position:"relative",
        top:"-15px",
    },
    myList:{
        position:"relative",
        top:"-10px",
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
      }
    },
    myCell:{
         width:"70px",
         textAlign:"center",
         transform: "translateX(0px) !important",
         transition: ".5s",
         "&:hover":{
            transform: "translateX(10px) !important",
            transition: ".5s"
      }
    },
    myCellHead:{
        width:"70px",
        textAlign:"left",
        transform: "translateX(0px) !important",
        transition: ".5s",
        "&:hover":{
           transform: "translateX(10px) !important",
           transition: ".5s"
     }
   },
   myLangHead:{
    width:"70px",
    textAlign:"center",
    padding: "inherit !important",
    transform: "translateX(0px) !important",
    transition: ".5s",
    "&:hover":{
       transform: "translateX(10px) !important",
       transition: ".5s"
 }
},
    myLang:{
        width:"70px",
        textAlign:"center",
        padding: "inherit !important",
        transform: "translateX(0px) !important",
        transition: ".5s",
        "&:hover":{
           transform: "translateX(10px) !important",
           transition: ".5s"
     }
    },
    myProblem:{
        width:"70px",
        textAlign:"center",
        transform: "translateX(0px) !important",
        transition: ".5s",
        "&:hover":{
           transform: "translateX(10px) !important",
           transition: ".5s"
     }
    },
    mySpan:{
   display:"flex",
   flexDirection:"column"

    },
    myTypo:{
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bolder !important",
        margin:"-3px"
    },
    myTypoCountry:{
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bolder !important",
        margin:"-3px",
        position:"relative",
        left:"35px",
        [theme.breakpoints.down('sm')]: {
            left: "-5px !important",
          },
          [theme.breakpoints.up('md')]: {
            right: "30px !important",
          }, 
    },
    myTypoFlag:{
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bolder !important",
        margin:"-3px",
        textAlign: "center",
        position: "relative",
        right: "40px !important",
        [theme.breakpoints.down('sm')]: {
            left: "-5px !important",
          },
          [theme.breakpoints.up('md')]: {
            right: "30px !important",
          }, 
    }, myTypoCode:{
        color:"#fff",
        fontSize:"16px",
        textAlign: "left",
        position: "relative",
        left: "-10px !important",
        fontWeight:"bolder !important",
        margin:"-3px",
        [theme.breakpoints.down('sm')]: {
            left: "-5px !important",
          },
          [theme.breakpoints.up('md')]: {
            right: "50px !important",
          }, 
    },
    myTypoLanguage:{
        color:"#fff",
        fontSize:"16px",
        textAlign: "center",
        position: "relative",
        left: "40px !important",
        fontWeight:"bolder !important",
        margin:"-3px",
        [theme.breakpoints.down('sm')]: {
            left: "10px !important",
          },
          [theme.breakpoints.up('md')]: {
            right: "40px !important",
          }, 
    },
}));
export default useStyles;