import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import { GallerySectionDetails } from "./GallerySectionDetails";

interface GallerySectionProps {
    galleryDetails: GallerySectionDetails[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryDetails }) => {
    const slides: JSX.Element[] = [];

    for (let index = 0; index < galleryDetails.length; index += 2) {
        const firstDetail = galleryDetails[index];
        const secondDetail = galleryDetails[index + 1];

        slides.push(
            <div key={index} className="each-slide-effect">
                {firstDetail && (
                    <img
                        src={firstDetail.GalleryPic}
                        style={{ width: "50%" }}
                        alt={`Gallery ${firstDetail.id}`}
                    />
                )}
                {secondDetail && (
                    <img
                        src={secondDetail.GalleryPic}
                        style={{ width: "50%" }}
                        alt={`Gallery ${secondDetail.id}`}
                    />
                )}
            </div>
        );
    }

    return (
        <div >
            <Slide autoplay={true} cssClass="styling">
                {slides}
            </Slide>
        </div>
    );
};

export default GallerySection;
