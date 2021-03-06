import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([]);
    const {user} = useAuth();
    const email = user.email ;
    let unique = Math.floor(Math.random() * 100);
    let key = unique.toString();


    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url,{
    
        })
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);

    const handleAddToCart = (index) =>{
      
       
        const data = (allProducts[index]);
        data.email = email;
        data.key = key;
        
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        });
    };

    return (
        <>
        <Navigation/>
        <Box sx={{ flexGrow: 1}}>
        <Container  sx={{  border: 0,boxShadow: 1} }>
          <Typography  sx={{ fontWeight: "bold", color: 'info.main', m: 2  }} variant="h5" component="div">
          Explore the Time Travel Watch collection of prestigious, high-precision timepieces.
          </Typography>
          <Typography  sx={{ fontWeight: 600, mb:4, borderBottom: 2, color: 'text.secondary'}} variant="h8" component="div">
          Time Travel watch offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist. Discover the broad selection of  watches to find a perfect combination of style and functionality.
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {allProducts.map((pro, index)=> (
            <Grid sx={{mb:4}} item xs={3} sm={4} md={4}>
              
            <Card 
            sx={{ minWidth: 275, border: 0,boxShadow: 3}}
            variant="outlined"
            >
            <Typography variant="h5" component="div">
                        {pro.name}
                    </Typography>
            <CardMedia
                component="img"
                style={{width:'auto', height:'150px', margin: '0 auto'}}
                image= {pro.img}
                alt="green iguana"
            />
                <CardContent>
            
                    <Typography variant="body2" color="text.secondary">
                        {pro.details.slice(0,70)}..
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', bgcolor: 'text.secondary', color: 'white'  }} variant="body2" color="text.secondary">
                        {pro.price} $
                    </Typography>
                </CardContent>
            <CardActions>

              <Box sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>

              <Link to='/purchase'>
                 <Button onClick={() => handleAddToCart(index)} size="small">By Now</Button>
              </Link>

              </Box>
                <Box>
                <IconButton sx={{color: 'error.main' }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton sx={{ color: 'info.main' }} aria-label="share">
                    <ShareIcon />
                </IconButton>
                
            </Box>

             </CardActions>
               
            </Card>
    
            </Grid>
        ))}

        </Grid>
        </Container>
      </Box>
      <Footer/>
      </>
    );
};

export default Explore;