import React from "react";
import AppLogo from "../../../../assets/app-logos/white-logo.png";

const NavLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
    ...props
}) => {
    return (
        <img
            {...props}
            src={AppLogo}
            style={{ display: "flex", width:"6rem" }}
            alt="App Logo"
        />
    );
};

export default NavLogo;
