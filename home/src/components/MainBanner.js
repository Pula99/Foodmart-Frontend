import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CssBaseline, Typography, Box, Card, CardContent } from '@mui/material';
import "../styles/MainBanner.css";
import Slides from "./Slides.js";
 
function MainBanner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    

    return (
        <Box>
            <CssBaseline />
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <Slider {...settings}>
                    {Slides.map((slide, index) => (
                        <Box
                            key={index}
                            className="slide"
                            sx={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <Box className="slide-content">
                                <Card sx={{
                                    width: '90%', 
                                    maxWidth: 750, 
                                    height: 'auto', 
                                    borderRadius: "15px", 
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                                    margin: '0 auto'
                                }}>
                                    <CardContent>
                                        <Typography variant="h4" sx={{
                                            fontFamily: "serif",
                                            color: "white",
                                            fontSize: { xs: 'h5.fontSize', sm: 'h1.fontSize' } 
                                        }}>
                                            {slide.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{
                                            color: "white",
                                            fontSize: { xs: 'body2.fontSize', sm: 'h5.fontSize' } 
                                        }}>
                                            {slide.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default MainBanner;
