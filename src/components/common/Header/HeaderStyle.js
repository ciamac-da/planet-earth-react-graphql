/*
.##.....##....###....########.########.########..####....###....##...............##.....##.####
.###...###...##.##......##....##.......##.....##..##....##.##...##...............##.....##..##.
.####.####..##...##.....##....##.......##.....##..##...##...##..##...............##.....##..##.
.##.###.##.##.....##....##....######...########...##..##.....##.##.......#######.##.....##..##.
.##.....##.#########....##....##.......##...##....##..#########.##...............##.....##..##.
.##.....##.##.....##....##....##.......##....##...##..##.....##.##...............##.....##..##.
.##.....##.##.....##....##....########.##.....##.####.##.....##.########..........#######..####
*/
/*
.##.....##.########....###....########..########.########.
.##.....##.##.........##.##...##.....##.##.......##.....##
.##.....##.##........##...##..##.....##.##.......##.....##
.#########.######...##.....##.##.....##.######...########.
.##.....##.##.......#########.##.....##.##.......##...##..
.##.....##.##.......##.....##.##.....##.##.......##....##.
.##.....##.########.##.....##.########..########.##.....##
*/
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

    appBar:{
        backgroundColor:"red",
    },
    toolbar:{
        backgroundColor:"red",
        textShadow:"0px 1px 2px black",
        width: "fit-content",
        "&:hover":{
        transform: "translateX(10px) !important"
      },
      [theme.breakpoints.down('sm')]: {
        margin: "auto"
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: "1px",
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: "1px",
      },
    },
  t1:{
     color: "blue",
     fontWeight: "bolder !important",
     backgroundColor: "white",
     borderRadius:"5px 0px 0px 5px",
     textShadow:"0px 1px 2px black",

    },
     t2:{
         color: "green",
         fontWeight: "bolder !important",
         backgroundColor: "white",
         textShadow:"0px 1px 2px black",
         },

         t3:{
          color: "gold",
          fontWeight: "bolder !important",
          backgroundColor: "white",
          borderRadius:"0px 5px 5px 0px",
          textShadow:"0px 1px 2px black",
         },
}));
export default useStyles;

