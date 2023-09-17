import { BorderStyleSharp } from '@mui/icons-material'
import BannerImg from '../../../assets/illustrations/TwiceConcertBanner.jpg'
import { Box, Card, CardContent, Typography } from '@mui/material'

const EventCard = () => {
  
  const BoxStyles = {
    alignItems:'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
  }

  const ImgStyles = {
    borderRadius: '4.5vh',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    height: 'auto',
    width: '80vh',
  }

  const CardStyles = {
    backgroundColor: 'transparent',
    boxShadow: 0, 
    margin: '1vh', 
    minWidth: '100vh', 
  }

  return (
    <Box sx={BoxStyles}>

      <img src={BannerImg} style={ImgStyles}></img>
      
      <Card sx={CardStyles}>
        <CardContent sx={{textAlign: 'center'}}>
          <Typography sx={{fontSize: '3vh'}} variant='button'>
            TWICE 5TH WORLD TOUR ‘READY TO BE’ IN SINGAPORE
          </Typography>
          <Typography sx={{mb: 1.5, fontSize: '2vh'}} variant='body1'>
            02 Sep 2023 (Sat.) ~ 03 Sep 2023 (Sun.) @ Singapore Indoor Stadium
          </Typography>
        </CardContent>
      </Card>

    </Box>
  )
}


export default EventCard