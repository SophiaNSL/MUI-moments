import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";


const useStyles = makeStyles( (theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  }

}));

const Share = () => {

  const classes = useStyles();

  return (
   <Container className={classes.container}>
     <Post id={1} title={"CBR-My Second Hometown"}/>
     <Post id={4} title={"Spring is coming..."}/>
     <Post id={5} title={"Little Foodie"}/>
     <Post id={2} title={"Love"}/>
     <Post id={3} title={"Hope"}/>
    
   </Container>
    )
};

export default Share;