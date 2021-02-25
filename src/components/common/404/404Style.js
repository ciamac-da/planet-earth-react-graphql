import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
            '& > *': {
                  margin: theme.spacing(1),
            },
      },
      divStyle: {
            marginTop: "200px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
      },
      span404: {
            fontSize: "60px",
            color: "orange",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: '"Titillium Web", sans-serif !important',
            fontFamily: "'Open Sans', sans-serif !important",
      },
      spanText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: '"Titillium Web", sans-serif !important',
            fontFamily: "'Open Sans', sans-serif !important",
      },
      errorText: {
            fontSize: "25px",
            color: "white",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: '"Titillium Web", sans-serif !important',
            fontFamily: "'Open Sans', sans-serif !important",
            marginBottom: "20px",
      },
      myButton: {
            backgroundColor: "orange",
            fontWeight: "bolder",
            textDecoration:"inherit !important",
            "&:hover":{
                  backgroundColor:"black",
                  color:"orange",
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default useStyles;