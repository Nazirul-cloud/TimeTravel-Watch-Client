import { Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    const onSubmit = data => {
    
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Add Your Review Successfully');
                reset();
            } 
        })
    }

    return (
      <>
        <Navigation/>
         <Container>
         <Typography  sx={{ fontWeight: 600, mt:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      ADD YOUR REVIEW
          </Typography>
             <Card sx={{m:5, p:5}}>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: '50%', margin:"10px" }} defaultValue={user.displayName} {...register("name")} />
                        <input style={{ width: '50%', margin:"10px" }} defaultValue={user.email} {...register("email")} />
                        <input style={{ width: '50%', margin:"10px" }} defaultValue={user?.photoURL} {...register("img")} />
                        <input placeholder='Enter your ratting into 0 to 5' style={{ width: '50%', margin:"10px" }} {...register("ratting")} />
                        <input placeholder='Your Comment' style={{ width: '44%', padding:'30px', margin:"10px" }} {...register("comment")} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input style={{ width: '50%', margin:"10px"}} type="submit" value="Submit" />

                        
                </form>
               </Box>
               </Card>
        </Container>
        <Footer/>
     </>
    );
};

export default AddReview;