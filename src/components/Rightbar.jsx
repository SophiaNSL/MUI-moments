import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
// cannot resolve the AvatarGroup, should install @material-ui/lab first
import AvatarGroup from '@material-ui/lab/AvatarGroup';


const useStyles = makeStyles( (theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top:0
  },
  title:{
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  },
  link:{
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize:16
  }

}));

const Rightbar = () => {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
    <Typography className={classes.title} gutterBottom>Online Friends</Typography>
    <AvatarGroup max={6} style={{marginBottom:20}}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
    </AvatarGroup>

    <Typography className={classes.title} gutterBottom>
      Gallery
    </Typography>

    <ImageList 
      rowHeight={150} 
      className={classes.imageList} cols={2} 
      style={{marginBottom:20}}
    >
        
          <ImageListItem >
            <img src="/img/imageLists/1.jpg" alt="pic1" />
          </ImageListItem>

          <ImageListItem >
            <img src="/img/imageLists/2.jpg" alt="pic2" />
          </ImageListItem>

          <ImageListItem >
            <img src="/img/imageLists/3.jpg" alt="pic3" />
          </ImageListItem>

          <ImageListItem >
            <img src="/img/imageLists/4.jpg" alt="pic4" />
          </ImageListItem>

          <ImageListItem >
            <img src="/img/imageLists/5.jpg" alt="pic5" />
          </ImageListItem>

          <ImageListItem >
            <img src="/img/imageLists/6.jpg" alt="pic6" />
          </ImageListItem>    
    </ImageList>

    <Typography className={classes.title} gutterBottom>
      Categories
    </Typography>
    <Link href="#" className={classes.link} variant="body2">
      Sport
    </Link>
    <Link href="#" className={classes.link} variant="body2">
      Food
    </Link>
    <Link href="#" className={classes.link} variant="body2">
      Music
    </Link>
    <Divider flexItem style={{marginBottom:5}}/>

    <Link href="#" className={classes.link} variant="body2">
      Work
    </Link>
    <Link href="#" className={classes.link} variant="body2">
      Science
    </Link>
    <Link href="#" className={classes.link} variant="body2">
      Life
    </Link>



    </Container>
    )
};

export default Rightbar;