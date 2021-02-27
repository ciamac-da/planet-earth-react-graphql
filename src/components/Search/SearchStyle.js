import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  
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
  },
      inputStyle:{
            margin: "0 auto",
            textAlign:"center !important",
            textAlignLast: "center"
          },
       
}));

export default useStyles;