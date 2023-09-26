import React from "react";
import AppLogo from "../../../../assets/app-logos/white-logo.png";
import { useNavigate } from "react-router-dom";

const NavLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
    ...props
}) => {
    const navigate = useNavigate();

    return (
        <img
            {...props}
            onClick={() => navigate("/")}
            src={AppLogo}
            style={{ display: "flex", width: "6rem" }}
            alt="App Logo"
        />
    );
};

export default NavLogo;
