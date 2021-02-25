import { makeStyles } from '@material-ui/core/styles';
import EarthImage from '../../../assets/planet-earth.jpg';


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
            margin:0,
            backgroundImage: `url(${EarthImage})`, 
            height:"100vh",
            objectFit:"cover"
      },
      span404: {
            fontSize: "60px",
            color: "yellow",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            paddingTop: "70px",
           
      },
      spanText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
           
      },
      errorText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            marginBottom: "20px",
      },
      myButton: {
            backgroundColor: "yellow",
            fontWeight: "bolder",
            textDecoration:"inherit !important",
            "&:hover":{
                  backgroundColor:"white",
                  color:"black",
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default useStyles;