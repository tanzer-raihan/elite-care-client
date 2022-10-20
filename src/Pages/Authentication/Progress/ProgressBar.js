import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useAuth from '../../../Hooks/Auth/useAuth';

const ProgressBar = () => {
    const { user } = useAuth()
    return (
        <div className=' progressBar'>
          <div>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />

                </Box>
                <h6 className='fw-bold text-secondary text-center mt-2'>Loading</h6>
            </div>
            {user?.email &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">Sign-In Successfull.!</Alert>
                </Stack>

            }
        </div>
    );

};

export default ProgressBar;