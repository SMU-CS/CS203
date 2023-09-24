import BannerImg from "../../../assets/illustrations/TwiceConcertBanner.jpg";
import {
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import defaultTheme from "../../../assets/theme/defaultTheme";

const EventCard = () => {
    const BoxStyles = {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

    const ImgStyles = {
        borderRadius: "4.5vh",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
        height: "auto",
        width: "40rem",
    };

    const CardStyles = {
        backgroundColor: "transparent",
        boxShadow: 0,
        margin: "1vh",
        minWidth: "100vh",
    };

    const CardContentStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    };

    return (
        <Box sx={BoxStyles}>
            <img src={BannerImg} style={ImgStyles}></img>

            <Card sx={CardStyles}>
                <CardContent sx={CardContentStyles}>
                    <Box
                        bgcolor={defaultTheme.palette.primary.light}
                        width={"90px"}
                        height={"10px"}
                        m={"30px"}
                        mt={"10px"}
                    >
                        <br />
                    </Box>
                    <Typography
                        variant='subtitle1'
                        fontWeight={"bold"}
                    >
                        TWICE 5TH WORLD TOUR ‘READY TO BE’ IN SINGAPORE
                    </Typography>
                    <Typography
                        sx={{mb: 1.5}}
                        variant='subtitle1'
                    >
                        02 Sep 2023 (Sat.) ~ 03 Sep 2023 (Sun.) @ Singapore
                        Indoor Stadium
                    </Typography>
                    <Box
                        bgcolor={defaultTheme.palette.primary.dark}
                        width={"60px"}
                        height={"10px"}
                        marginTop={"20px"}
                    >
                        <br />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default EventCard;
