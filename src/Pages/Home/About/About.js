import { Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import about from '../../../images/about.jpg'

const About = () => {
    return (
        <Container>
         <Typography  sx={{ fontWeight: 600, mb:3, mt:6, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      ABOUT US
          </Typography>
          <Card>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600,  color: 'text.secondary'}} variant="h6" noWrap component="div">
                 A LITTLE ABOUT US
            </Typography>
            <Typography  sx={{ fontWeight: 600,  color: 'text.secondary'}}  variant="h7" Wrap component="div">
                 The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.
            </Typography>
            <br />
            <Button variant="outlined"> More </Button>


            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:'60%', height: '90%' , filter: "blur(1px)"}} src={about} alt="" />
            </Grid>
        </Grid>
        </Card>
        </Container>
    );
};

export default About;