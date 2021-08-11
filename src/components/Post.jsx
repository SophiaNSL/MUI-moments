import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles( (theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  },
  media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
          height: 150
      }
  },
  card: {
      marginBottom: theme.spacing(5)
  },
  textLscr: {
      [theme.breakpoints.up("sm")]: {
          display: "block"
      },
      display: "none"
  },
  textSscr: {
    [theme.breakpoints.up("sm")]: {
        display: "none"
    },
    display: "block"
  }
}));

const Post = ({id, title}) => {

  const classes = useStyles();
  const path = "/img/posts/" + id + ".jpg";

  return (

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                className={classes.media}
                component="img"
                image={path}
                // image="/img/posts/1.jpg"
                title="first post"
                
                />

                <CardContent>
                    {/* gutterBottom give spacing under the bottom */}
                    <Typography variant="h5" gutterBottom>{title}</Typography>
                    <Typography variant="body2" className={classes.textLscr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque sint, laborum voluptates tempora ullam temporibus molestias fugit. Eum, maiores non eaque alias assumenda ullam maxime vero, in tempore repellendus inventore itaque sapiente enim laborum blanditiis aspernatur id reprehenderit nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque sint, laborum voluptates tempora ullam temporibus molestias fugit. Eum, maiores non eaque alias assumenda ullam maxime vero, in tempore repellendus inventore itaque sapiente enim laborum blanditiis aspernatur id reprehenderit nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque sint, laborum voluptates tempora ullam temporibus molestias fugit. Eum, maiores non eaque alias assumenda ullam maxime vero, in tempore repellendus inventore itaque sapiente enim laborum blanditiis aspernatur id reprehenderit nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque sint, laborum voluptates tempora ullam temporibus molestias fugit. Eum, maiores non eaque alias assumenda ullam maxime vero, in tempore repellendus inventore itaque sapiente enim laborum blanditiis aspernatur id reprehenderit nemo?</Typography>
                    <Typography variant="body2"className={classes.textSscr}>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat autem ut nam.
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
            
        </Card>
    )
};

export default Post;