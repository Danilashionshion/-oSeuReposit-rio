import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ErrorMen(){

    return(
        < >
            <Typography component="div" variant="body1" >
                
                <Box sx={{ color: 'error.main', textAlign: "center", fontSize: "70px"}}>Error: Deu RUIM :d, 404 Not Found</Box>
                
            </Typography>
        </>
    )
}