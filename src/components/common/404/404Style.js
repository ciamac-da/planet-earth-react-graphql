import { makeStyles } from '@material-ui/core/styles';
import EarthImage from '../../../assets/milkyway.jpeg';


const useStyles = makeStyles(() => ({

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
            color: "#f58d06",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            position: "relative",
            top:"300px",
           
      },
      spanText: {
            fontSize: "25px",
            color: "#fff",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            position: "relative",
            top:"300px",
           
      },
      errorText: {
            fontSize: "25px",
            color: "#fff",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            marginBottom: "20px",
            position: "relative",
            top:"300px",
      },
      myButton: {
            backgroundColor: "#f58d06",
            color:"#fff",
            fontWeight: "bolder",
            textDecoration:"inherit !important",
            position: "relative",
            top:"300px",
            "&:hover":{
                  backgroundColor:"rgb(255, 0, 32)",
                  color:"#fff",
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default useStyles;
