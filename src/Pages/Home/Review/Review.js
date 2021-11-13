import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Rating } from 'react-simple-star-rating'
import { Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';



const Review = () => {
    const [rating, setRating] = React.useState(0);
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url,{
    
        })
            .then(res => res.json())
            .then(data => setReviews(data.slice(0,6)));
    }, []);

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }


    return (
        <Container>
            <Typography  sx={{ fontWeight: 600, mb:3, borderBottom: 2, color: 'text.secondary'}} variant="h4" component="div">
                      OUR HAPPY CLIENT
          </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {reviews.map((review)=> (
            <Grid sx={{mb:4}} item xs={3} sm={4} md={4}>
              
            <Card 
            sx={{ minWidth: 275, border: 0,boxShadow: 3}}
            variant="outlined"
            >

            <CardMedia
                component="img"
                style={{width:'auto', height:'150px', margin: '0 auto', borderRadius: "50%"}}
                image= {review.img}
                alt="green iguana"
            />
            <Typography variant="h5" component="div">
                        {review.name}
            </Typography>
           
                <CardContent>
            
                    <Typography variant="body2" color="text.secondary">
                        {review.comment.slice(0,80)}..
                    </Typography>
                    <Rating onClick={handleRating} ratingValue={review.ratting}  />
                 </CardContent>

            <CardActions>

            </CardActions>
               
            </Card>
    
            </Grid>
        ))}

        </Grid>
        </Container>
    );
};

export default Review;
