import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Review from '../Review/Review';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Product/>
            <Review/>
            <Footer></Footer>
        </div>
    );
};

export default Home;