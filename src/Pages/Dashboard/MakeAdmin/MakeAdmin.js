import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';



 
const MakeAdmin = () => {
    const [email,  setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleAdminSubmit = e =>{
        const user = { email }
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
        },
            body:JSON.stringify(user)
        
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true);
            }
           
        })
        e.preventDefault();
    }
        
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Make an Admin </h2>
            <form onSubmit={handleAdminSubmit}>
                 <TextField  
                 sx={{width : "50%"}}
                 label="Email" 
                 variant="standard"
                 type="email"
                 onBlur={handleOnBlur}
                  />
                <Button type='submit'  variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully </Alert>}

        </div>
    );
};

export default MakeAdmin;