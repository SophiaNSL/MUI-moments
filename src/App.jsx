
// wrongly import from "@material-ui/styles", then the default palette.success.main is not defined
//tried to install "@material-ui/styles"
import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Share from "./components/Share";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";


const useStyles = makeStyles( (theme) => ({
  right: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
  

}));

const App = () => {

  const classes = useStyles();

  return (
   <div>
     <Navbar />
     <Grid container>
       <Grid item sm={2} xs={2}>
         <Leftbar />
       </Grid>
       <Grid item sm={7} xs={10}>
         <Share />
       </Grid>
       <Grid item sm={3} className={classes.right}>
        <Rightbar />
       </Grid>
     </Grid>
     <Add />
   
    </div>
    )
};

export default App;