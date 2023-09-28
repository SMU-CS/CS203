import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { EventListingType } from "../../../types/event";
import { Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface GallerySectionProps {
    slides: EventListingType[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ slides }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box justifyContent="center" alignItems="center" alignContent="center">
            <Slide
                autoplay
                transitionDuration={500}
                easing="cubic-out"
                responsive={[
                    {
                        breakpoint: theme.breakpoints.values.sm,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                ]}
            >
                {slides.map(({ bannerURL, id }) => (
                    <img
                        onClick={() => navigate(`/event/${id}`)}
                        key={id}
                        width="100%"
                        src={bannerURL}
                        alt={`Gallery ${id}`}
                    />
                ))}
            </Slide>
        </Box>
    );
};

export default GallerySection;
