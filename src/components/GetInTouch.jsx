import React from 'react';
import { Stack } from '@mui/material';
import Title from './Title';

const GetInTouch = () => {
    return (
        <Stack
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                mx: 6,
            }}
        >
            <Title
                text='Ready to Transform Your Space? Let Our Experts Handle It!'
                textAlign='center'
            />
            <div style={{ 
                textAlign: 'center', 
                marginTop: '20px', 
                fontSize: '1rem',
                lineHeight: '1.5'
            }}>
                Seeking our expert services? Give us a call at +1 (425) 996-16-06 or drop us an email at  Woodgenius1@gmail.com. We're eager to connect with you and will respond promptly to discuss your needs.
            </div>
        </Stack>
    )
}

export default GetInTouch;
