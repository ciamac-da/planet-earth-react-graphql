import { makeStyles } from '@material-ui/core/styles';
import EarthImage from '../../../assets/milkyway.jpeg';


const useStyles = makeStyles((theme) => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      divStyle: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundImage: `url(${EarthImage})`, 
            height:"100vh",
            objectFit:"cover",
            overflow: "hidden"
      },
      span404: {
            fontSize: "60px",
            color: "gold",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            position: "relative",
            top:"300px",
           
      },
      spanText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            position: "relative",
            top:"300px",
           
      },
      errorText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            marginBottom: "20px",
            position: "relative",
            top:"300px",
      },
      myButton: {
            backgroundColor: "gold",
            fontWeight: "bolder",
            textDecoration:"inherit !important",
            position: "relative",
            top:"300px",
            "&:hover":{
                  backgroundColor:"red",
                  color:"white",
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default useStyles;
