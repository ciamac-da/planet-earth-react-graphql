import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

 footer: {
   marginTop: 'auto',
   backgroundColor:"rgb(255, 0, 32);",
   textAlign:"center",
   position:"fixed",
   bottom: 0,
   display:"block",
   width:"100vw",
   marginBottom:"0px",
   height:"33px"
 },
 typo:{
       color:"#fff",
       fontWeight: "bolder",
 }
}));
export default useStyles;