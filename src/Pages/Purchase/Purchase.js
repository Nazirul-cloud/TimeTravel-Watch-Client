import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';



const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [orders, setOrders ] = useState([])
    const {user} = useAuth();
    const email = user.email;

    useEffect(() =>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res => res.json())
        .then(data =>setOrders(data))
    }, []);


    // This is for hook-from
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
                reset();
            } 
        })
    }

    return (
        <>
        <Navigation></Navigation>
       <Container>
        <Grid container spacing={2}>
            
            <Grid item sx={{mt:4}} xs={12} md={6} > 
            <Typography  sx={{ fontWeight: 600, mb:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      YOUR ORDERS WATCHES
          </Typography>
            {
                orders.map((order) => (
                    
                <Card 
                    sx={{ minWidth: 275, border: 0,boxShadow: 3, mb:4}}
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

                        </CardContent>
                    <CardActions>
                      
         
                     </CardActions>
                       
                </Card>
            
                
                ))
            }
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography  sx={{ fontWeight: 600, mt:4, mb:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      FILL UP THE FROM
          </Typography>
                <Card sx={{m:5, p:5}}>
              <Box>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: '90%', margin:"10px" }} defaultValue={user.email} {...register("email")} />
                    <input style={{ width: '90%', margin:"10px" }} defaultValue={user.displayName} {...register("name")} />
                    <input style={{ width: '90%', margin:"10px" }} placeholder='Address' {...register("Address", { required: true })} />
                    <input style={{ width: '90%', margin:"10px" }} placeholder='City' {...register("City", { required: true })} />
                    <input style={{ width: '90%', margin:"10px" }} placeholder='Phone' {...register("Phone", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input style={{ width: '90%', margin:"10px"}} type="submit" value="Place Order" />
                </form>
              </Box>
              </Card>
            </Grid>
        </Grid>
       </Container>
       <Footer></Footer>
       </>
    )

};
export default Purchase;