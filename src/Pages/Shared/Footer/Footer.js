import { Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import WatchIcon from '@mui/icons-material/Watch';
const Footer = () => {
   

    return (
            <Container 
            maxWidth='lg'  
            sx={{ bgcolor: 'text.secondary', color: 'white' }}
           
            >
            <Grid container spacing={5} sx={{mt:2}}>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Help</Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Contact
                        </Link>
                    </Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Support
                        </Link>
                    </Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Privacy 
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Account</Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Login
                        </Link>
                    </Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Register
                        </Link>
                    </Box>
                    
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Massages</Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Backup
                        </Link>
                    </Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            History
                        </Link>
                    </Box>
                    <Box>
                        <Link sx={{textDecoration: 'none'}} href="/" color="inherit">
                            Roll
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Box textAlign="center" pt={{xs:3, sm:10}} pb={{xs:5, sm:0}}>
                    <GoogleIcon/> <WatchIcon/> <HomeIcon/> 
            </Box>
            <Box textAlign="center" pt={{xs:3, sm:10}} pb={{xs:5, sm:0}}>
                TimeTravel Watches &reg; 2021
            </Box>
        </Container>
    
    );
};

export default Footer;