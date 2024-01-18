import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'


import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: img1
        },
        {
            alt: 'image2',
            url: img2
        },
        {
            alt: "image3",
            url: img3
        },
        {
            alt: "image4",
            url: img4
        },
        {
            alt: "image5",
            url: img5
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Showcase of Our Capabilities'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Gallery
                </Typography>
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery