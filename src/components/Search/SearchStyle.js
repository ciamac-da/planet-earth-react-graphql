import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  mainStyle:{
    backgroundColor:"#f58d06",
    height: "270px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    alignItems:"center",
    textShadow:"0px 1px 5px #000000",
    fontWeight:"bolder !important",
    flexDirection:"column",
    fontSize:"25px",
    position:"relative",
    top:"15px",
    [theme.breakpoints.down('sm')]: {
      position:"relative",
      top:"40px"
    },
  },
      inputStyle:{
            margin: "0 auto",
            textAlign:"center !important",
            textAlignLast: "center",
           
          },
          myButton :{
            margin: "0 auto",
            textAlign:"center !important",
            color: "#fff",
            backgroundColor:"rgb(29, 148, 0)",
            transform: "translateX(0px) !important",
            transition: ".5s",
            position:"relative",
            top:"40px",
            "&:hover":{
                transform: "translateX(10px) !important",
                transition: ".5s",
                backgroundColor:"#0067b3"
          },
          [theme.breakpoints.down('sm')]: {
            position:"relative",
            top:"30px"
          },
          },
          linkStyle:{
            textDecoration:"none !important",
      },
       
}));

export default useStyles;