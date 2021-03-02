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
    mainRow:{
      height:"150px"
    },
    myRow:{
        fontSize:"30px",
        position:"sticky",
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
    myFlagCell:{
      width:"70px",
      fontSize:"35px",
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
        position:"relative",
        right:"120px !important",
        width:"70px",
        textAlign:"center",
        transform: "translateX(0px) !important",
        transition: ".5s",
        "&:hover":{
           transform: "translateX(10px) !important",
           transition: ".5s"
     },
     [theme.breakpoints.down('sm')]: {
      right: "0px !important",
    },
    [theme.breakpoints.up('md')]: {
      right: "50px",
    }, 
    },
    mySpan:{
         display:"flex",
         flexDirection:"column",
          position: "relative",
          right:"35px",
    },
    myTypo:{
        color:"#fff",
        fontSize:"16px",
        fontWeight:"bolder !important",
        margin:"-3px"
    },
    myTypoCountry:{
        color:"#fff",
        fontSize:"20px !important",
        fontWeight:"bolder !important",
        margin:"-3px",
        position:"relative",
        left:"15px !important",
        [theme.breakpoints.down('sm')]: {
          left: "-5px !important",
          textAlign : "center",
          },
          [theme.breakpoints.up('md')]: {
            left:"-10px !important"
          }, 
          [theme.breakpoints.up('lg')]: {
            left:"50px !important"
          }, 
          
    },
    myTypoFlag:{
        color:"#fff",
        fontSize:"20px !important",
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
        fontSize:"20px !important",
        textAlign: "left",
        position: "relative",
        left: "0px",
        fontWeight:"bolder !important",
        margin:"-3px",
        [theme.breakpoints.down('sm')]: {
            left: "-5px !important",
          },
          [theme.breakpoints.up('md')]: {
            right: "50px !important",
          }, 
          [theme.breakpoints.up('lg')]: {
            left: "25px !important",
          }, 
    },
    myTypoLanguage:{
        color:"#fff",
        fontSize:"20px !important",
        textAlign: "center",
        position: "relative",
        left: "-120px !important",
        fontWeight:"bolder !important",
        margin:"-3px",
        [theme.breakpoints.down('sm')]: {
            left: "-10px !important",
          },
          [theme.breakpoints.up('md')]: {
            position: "relative",
            left: "-100px !important",
          }, 
          [theme.breakpoints.up('lg')]: {
            position: "relative",
            left: "-60px !important",
          }, 
          
    },
    myCheckbox:{
      position:"relative !important",
      right:"40px !important",
      [theme.breakpoints.down('sm')]: {
        left: "-18px !important",
      },
      [theme.breakpoints.up('md')]: {
        right: "22px !important",
      }, 
    },
    myButton :{
      margin: "0 auto",
      textAlign:"center !important",
      color: "#fff",
      backgroundColor:"rgb(29, 148, 0)",
      transform: "translateX(0px) !important",
      transition: ".5s",
      "&:hover":{
          transform: "translateX(10px) !important",
          transition: ".5s",
          backgroundColor:"#0067b3"
    },
    [theme.breakpoints.down('sm')]: {
      position:"relative",
      left:"20px"
    },
    [theme.breakpoints.up('md')]: {
      position:"relative",
      left:"30px",
      margin:"5px",
    },
    [theme.breakpoints.up('lg')]: {
    },
    },
}));
export default useStyles;