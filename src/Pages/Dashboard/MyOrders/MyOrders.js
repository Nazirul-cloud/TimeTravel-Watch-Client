import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';



const color = {
    backgroundColor: "red"
}

const MyOrders = () => {
    
    const [orders, setOrders ] = useState([]);
    const [isUpdate, setIsUpdated] = useState(null);

    const {user} = useAuth();
    const email = user.email;

    useEffect(() =>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    }, [isUpdate]);


    // PLACE ORDER
    const onSubmit = data => {
    
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed Successfully');
               
            } 
        })
    };

    //DELETE ORDERS

    const handleDelete = key =>{
        const url = `http://localhost:5000/orders/${key}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted');
                setIsUpdated(true);
            }
            else{
                setIsUpdated(false);
            }
        })
    };

    return (
        <>
        <Navigation></Navigation>
       <Container>
        <Grid container spacing={1}>
            
            <Grid item sx={{mt:4}} xs={12} md={12} > 
            <Typography  sx={{ fontWeight: 600, mb:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      YOUR ORDERS WATCHES
          </Typography>
            {
                orders.map((order) => (
                    
                <Card 
                    sx={{ minWidth: 275, border: 0,boxShadow: 3, mb:4, p:4}}
                    variant="outlined"
                    >
                    <Typography variant="h5" component="div">
                                {order.name} 
                    </Typography>
                    <CardMedia
                        component="img"
                        style={{width:'auto', height:'150px', margin: '0 auto'}}
                        image={order.img}
                        alt="green iguana"
                    />
                        <CardContent>
                    
                            <Typography variant="body2" color="text.secondary">
                                {order.details}
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="text.secondary">
                               Price : {order.price} $
                            </Typography>

                        </CardContent>
                
                    
                    <Button 
                    onClick={() => handleDelete(order.key)}
                    variant="outlined" 
                    color="error"
                    >
                        DELETE
                    </Button>
                   
                       
                </Card>
                ))
            }
            </Grid>
        </Grid>
       </Container>
     <Footer/>
       </>
    )

};
export default MyOrders;