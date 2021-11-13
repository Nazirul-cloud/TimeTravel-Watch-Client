import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/bn-2.jpg'
import bg from '../../../images/bn-3.jpg'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import {NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg}  sx={{ flexGrow: 1, textAlign:'left', alignItems: 'center', p:2 }}>
            <Grid  container spacing={2}>
            <Grid  item xs={12} md={6} style={{...verticalCenter}}>
               <Box > 
                <Typography sx={{mb:3}} style={{color: 'white'}} variant='h3'>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography  sx={{mb:3}} variant='h6' style={{color: 'white',fontSize: 14, fontWeight: 300}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam doloremque necessitatibus deleniti ipsam rerum <br /> <ArrowForwardIosIcon/> <NavLink 
                        style={{ textDecoration: 'none', color: 'black',backgroundColor:'#5CE7' }} 
                        to='/explore'> 
                        <Button color="inherit">explore</Button>
                        </NavLink>
                    </ Typography>
                 
               </Box>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{width:'80%',   filter: "blur(1px)"}} src={chair} alt="" />
            </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;