import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useState, useEffect } from 'react';
import './navbar.css';


const pages = [];
const settings = [];

const Navbar = () => {

    const [navbar, setNavbar] = useState(true)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        // Initial call to set the Navbar state based on the current scroll position.
        changeBackground();
      
        // Add the scroll event listener.
        window.addEventListener("scroll", changeBackground);
      
        // Remove the event listener when the component unmounts to prevent memory leaks.
        return () => {
          window.removeEventListener("scroll", changeBackground);
        };
      }, []);
      
    return (
        <AppBar className={navbar? 'navbar' : 'navbar-scroll'} position="fixed" elevation={0} sx={{ bgcolor: navbar? 'black' : 'black' }}>
            <Container>
                <Toolbar disableGutters style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
                    <img src="Mercedes-Logo.svg.png" />
                    

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;