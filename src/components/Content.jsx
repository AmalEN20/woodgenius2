import React from 'react';
import {
    Grid,
    Typography,
    IconButton,
    Card,
    CardContent
} from "@mui/material";
// React Icons
import { MdHome } from 'react-icons/md'; // Home icon
import { MdBusiness } from 'react-icons/md'; // Office icon
import { MdBuild } from 'react-icons/md'; // Customized Installations icon
// components
import Title from './Title';

const Content = () => {
    return (
        <Grid container spacing={3} // Adjusted spacing between grid items
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                py: 10,
                px: 2,
            }}
        >
            <Grid item xs={12} sm={12} md={12} // Adjusted to take full width
                component='section'
            >
                <Title
                    text={'Our Services'}
                    textAlign={'center'} // Centered the title
                />
            </Grid>

            {/* Updated grid items to take equal space */}
            <Grid item xs={12} sm={4} md={4}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                        mx: 'auto' // Centered the card
                    }}>
                    <CardContent>
                        <IconButton>
                            <MdHome size="3em" color="secondary" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Home Furniture Assembly
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                        mx: 'auto' // Centered the card
                    }}>
                    <CardContent>
                        <IconButton>
                            <MdBusiness size="3em" color="secondary" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Office Furniture Setup
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card
                    square={true}
                    sx={{
                        minHeight: 200,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                        mx: 'auto' // Centered the card
                    }}>
                    <CardContent>
                        <IconButton>
                            <MdBuild size="3em" color="secondary" />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                textTransform: 'capitalize',
                            }}
                        >
                            Customized Installations
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Content;
