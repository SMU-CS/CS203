import React from "react";

interface EventTabAnchorProps {
    id: string;
}

const EventTabAnchor: React.FC<EventTabAnchorProps> = ({ id }) => {
    return (
        <div
            style={{
                display: "block",
                height: "10rem",
                marginTop: "-10rem",
                visibility: "hidden",
            }}
            id={id}
        />
    );
};

export default EventTabAnchor;
