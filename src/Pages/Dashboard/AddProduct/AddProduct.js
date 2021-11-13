import { Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
    
        fetch('http://localhost:5000/product', {
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
        <Container>
        <Typography  sx={{ fontWeight: 600, mt:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                     ADD PRODUCT
         </Typography>
            <Card sx={{m:5, p:5}}>
             <Box>
               <form onSubmit={handleSubmit(onSubmit)}>
                       <input placeholder='Product Name' style={{ width: '50%', margin:"10px" }} {...register("name")} />
                       <input placeholder='Product Price' style={{ width: '50%', margin:"10px" }}  {...register("price")} />
                       <input placeholder='Product Description' style={{ width: '50%', height:'40px', margin:"10px" }}  {...register("details")} />
                       <input placeholder='Img URL' style={{ width: '50%', margin:"10px" }} {...register("img")} />

                       {errors.exampleRequired && <span>This field is required</span>}
                       <input style={{ width: '50%', margin:"10px"}} type="submit" value="Add Product" />      
               </form>
              </Box>
              </Card>
       </Container>
       </>
    );
};

export default AddProduct;