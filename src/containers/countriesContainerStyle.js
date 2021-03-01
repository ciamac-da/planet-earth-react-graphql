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
    //flexDirection:"column",
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
    textAlign:"center !important",
    textAlignLast: "center",
   
  },
  firstMainStyle:{
    [theme.breakpoints.down('sm')]: {
        position:"relative",
        top:"70px",
        left:"-20px",
        
      },
      [theme.breakpoints.up('md')]: {
        position:"relative",
        top:"90px",
        left:"0px",
      },
      [theme.breakpoints.up('lg')]: {
      },
  
  },
  secondMainStyle:{
    [theme.breakpoints.down('sm')]: {
        position:"relative",
        top:"80px",
        left:"-17px"
      },
      [theme.breakpoints.up('md')]: {
        position:"relative",
        top:"100px",
        left:"0px",
      },
      [theme.breakpoints.up('lg')]: {
      },
},
      TypoStyle:{
            margin: "0 auto",
            textAlign:"center !important",
            textAlignLast: "center",
            fontSize: "17px",
            paddingBottom: "10px",
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
      }
}));

export default useStyles;