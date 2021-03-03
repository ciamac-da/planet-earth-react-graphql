import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
 Container:{
     backgroundColor:"#fff"
 },
 mainStyle:{
    backgroundColor:"#f58d06",
    height: "270px",
    display: "flex",
    textAlign: "center",
    color: "#fff",
    alignItems:"center",
    textShadow:"0px 1px 5px #000000",
    fontWeight:"bolder !important",
    fontSize:"25px",
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        flexDirection:"column",
      },
      [theme.breakpoints.up('md')]: {
          display:"flex",
          flexDirection:"column !important",
    },
      [theme.breakpoints.up('lg')]: {
      },
  },
  inputStyle:{
    margin: "0 auto",
    display:"flex",
    textAlign:"center !important",
    textAlignLast: "center",
    color:"#fff"
   
  },
  searchIcon:{
    position:"relative", 
    top:"7px"
  },
  firstMainStyle:{
      fontSize:"20px",
    [theme.breakpoints.down('sm')]: {
        position:"relative !important",
        top:"60px !important",
        left:"0px !important",
        fontSize:"16px",        
      },
      [theme.breakpoints.up('md')]: {
        position:"relative !important",
        top:"130px !important",
        left:"-240px !important",
      },
      [theme.breakpoints.up('lg')]: {
        position:"relative",
        top:"135px",
        left:"-370px"
      },
      [theme.breakpoints.up('xl')]: {
        position:"relative",
        top:"135px",
        left:"-380px"
      },
  
  },
  secondMainStyle:{
      display:"flex !important",
      flexDirection:"column !important",
      justifyContent:"center !important",
      textAlign:"center !important",
    [theme.breakpoints.down('sm')]: {
        position:"relative !important",
        top:"60px !important",
        left:"-17px !important",
        fontSize:"16px !important",        
      },
      [theme.breakpoints.up('md')]: {
        position:"relative",
        top:"70px",
        left:"230px",
      },
      [theme.breakpoints.up('lg')]: {
        position:"relative",
        top:"70px",
        left:"410px"
      },
      [theme.breakpoints.up('xl')]: {
        position:"relative",
        top:"75px",
        left:"570px"
      },
},
      TypoStyle:{
            margin: "0 auto",
            textAlign:"center !important",
            textAlignLast: "center",
            fontSize:"20px",
            paddingBottom: "10px",
            [theme.breakpoints.down('sm')]: {
                position:"relative",
                left:"20px",
                fontSize:"16px",        
              },
              [theme.breakpoints.up('md')]: {
                position:"relative",
                left:"30px",
              },
              [theme.breakpoints.up('lg')]: {
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
          },
          [theme.breakpoints.up('lg')]: {
          },
          },
         
      linkStyle:{
            textDecoration:"none !important",
      },
      myIcon:{
        position: "relative",
        left:"30px"
      }
}));

export default useStyles;