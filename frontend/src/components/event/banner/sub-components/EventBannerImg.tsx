import React from "react";

interface EventBannerImgProps {
    url: string;
}

const EventBannerImg: React.FC<EventBannerImgProps> = ({ url }) => {
    return (
        <img
            src={url}
            style={{
                borderRadius: "7px",
                boxShadow:
                    "0px 1px 14px 0px rgba(0, 0, 0, 0.12), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.20)",
            }}
            width="100%"
        />
    );
};

export default EventBannerImg;
