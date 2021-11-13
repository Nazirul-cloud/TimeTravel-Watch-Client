import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Product = () => {

    const [products, setProducts]= useState([]);
    const {user} = useAuth();
    const email = user.email ;
    let unique = Math.floor(Math.random() * 100);
    let key = unique.toString();




    useEffect(() =>{
        fetch("http://localhost:5000/products")
         .then((res) => res.json())
         .then((data) => setProducts(data.slice(0,6)));
    } ,[]);

    const handleAddToCart = (index) =>{
      
       
        const data = (products[index]);
        data.email = email;
        data.key = key;
        
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        });
    };

    return (
        <Container>
             <Typography  sx={{ fontWeight: 600, mb:3, mt:6, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      Products We Provide
          </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                products.map((product, index) => (
                    <Grid sx={{mb:4}} item xs={3} sm={4} md={4}>
              
                    <Card 
                    sx={{ minWidth: 275, border: 0,boxShadow: 3}}
                    variant="outlined"
                    >
                    <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                    <CardMedia
                        component="img"
                        style={{width:'auto', height:'150px', margin: '0 auto'}}
                        image={product.img}
                        alt="green iguana"
                    />
                        <CardContent>
                    
                            <Typography variant="body2" color="text.secondary">
                                {product.details.slice(0,70)}..
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.price} $
                            </Typography>
                        </CardContent>
                    <CardActions>
                       <Link to='/purchase'>
                            <Button onClick={() => handleAddToCart(index)} size="small">By Now</Button>
                       </Link>
                  
                     </CardActions>
                       
                    </Card>
            
                    </Grid>
                ))
            }
            </Grid>
        </Container>
    );
};

export default Product;