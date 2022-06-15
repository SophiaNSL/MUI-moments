import { Avatar, Badge, InputBase, makeStyles, Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Cancel, Mail, Search } from "@material-ui/icons";
import Notifications from '@material-ui/icons/Notifications';
// Srach styling is used alpha
import { alpha } from '@material-ui/core/styles';
import { useState } from "react";


const useStyles = makeStyles( (theme) => ({
    logoLg: {
        [theme.breakpoints.up("sm")]: {
            display: "block"
        },
        display:"none"
    },
    logoSm: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        display: "block"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"

    },
    search: {
        display: "flex",
        alignItems: "center",
        
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%"
        }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)

    },
    cancel: {
        marginLeft: theme.spacing(11),
        
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
      searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
        
    icons: {
        
        alignItems: "center",
        display: (props) => (props.open? "none" : "flex")
        

    },
    badge: {
    marginRight: theme.spacing(2)
    }
  

}));

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const classes = useStyles({open});

  return (
   <AppBar position="fixed">
       <Toolbar className={classes.toolbar}>
           <Typography variant="h6" className={classes.logoLg}>Sophia-Webdev</Typography>
           <Typography variant="h6" className={classes.logoSm}>S-Webdev</Typography>

           <div className={classes.search}>
                <Search />
                <InputBase 
                    placeholder="Search…"
                    className={classes.input}
                />
                <Cancel 
                    className={classes.cancel}
                    onClick={ () => setOpen(false)}
                />
           </div>
           
           <div className={classes.icons}>
                <Search 
                className={classes.searchButton} 
                onClick={() => setOpen(true)}
                
                />
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications />
                </Badge>
                {/* when your image is in the public folder, the path is just "/img/sophia.png" */}
                <Avatar alt="Sophia" src="/img/sophia.png"/>
                
           </div>
       </Toolbar>
   </AppBar>
    )
};

export default Navbar;