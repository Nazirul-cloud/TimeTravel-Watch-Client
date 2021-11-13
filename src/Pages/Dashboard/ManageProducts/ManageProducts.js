import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/products',{
    
        })
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);

    
    const handleDelete = id =>{
        console.log(id);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = allProducts.filter(product => product._id !== id);
                setAllProducts(remaining);
              
            }
        })
    };

    return (
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

             
                 <Button onClick={ () => handleDelete(pro._id) }  size="small">Delete</Button>
             

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
    );
};

export default ManageProducts;