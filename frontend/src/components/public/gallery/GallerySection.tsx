import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { EventDetailsType } from "../../../types/event";
import { Box, useTheme } from "@mui/material";

interface GallerySectionProps {
    slides: EventDetailsType[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ slides }) => {
    const theme = useTheme();

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
                {slides.map(({ imagePic, id }) => (
                    <img
                        key={id}
                        width="100%"
                        src={imagePic}
                        alt={`Gallery ${id}`}
                    />
                ))}
            </Slide>
        </Box>
    );
};

export default GallerySection;
