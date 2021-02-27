import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  
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
  },
  firstMainStyle:{
    position:"relative",
    right:"-150px"
  },
  secondMainStyle:{
   position:"relative",
   right:"-1000px"
},
      TypoStyle:{
            margin: "0 auto",
            textAlign:"center !important",
            textAlignLast: "center",
            fontSize: "17px",
            paddingBottom: "10px",
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
          }
          },
      linkStyle:{
            textDecoration:"none !important",
      }
}));

export default useStyles;