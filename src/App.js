import logo from './logo.svg';
import './App.css';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) =>( {
    root:{
        FlexGrow:1
    },
    menuButton:{
        marginRight:theme.spacing(1)
    },
    title:{
        flexGrow:1
    },
    box:{
        marginRight:15
    }


}))

function App() {
    const classes=useStyles();
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6">Site</Typography>
                    <Box className={classes.box}>
                        <Button  color="inherit" variant="outlined">Log in</Button>
                    </Box>
                    <Button color="secondary" variant="contained">Sign up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default App;
