import {Slide, Card, Button, CardMedia, CardContent, Typography, CardActions,Box} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Indicator from './Indicator'


const MainCard = ({ step, nextStep, tutorialData, previusStep, handleStepChange,checked}) => {
  return (
    <Slide in={checked} direction={'left'} mountOnEnter unmountOnExit>
    <Card sx={{ width: '350px', height: '600px',borderRadius:5 }}>
      <CardMedia
        component="img"
        height="250px"
        image={tutorialData[step].image}
        alt="step1"
      />
      <CardContent sx={{ height: '170px' }}>
        <Typography variant='h6' textAlign='center'>{tutorialData[step].title}</Typography>
        <Typography variant='body2' textAlign='justify'>{tutorialData[step].description}</Typography>
      </CardContent>
      <CardActions sx={{display:'flex', flexDirection: 'column'}} >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        {step === 0 && (
          <Button variant='text' onClick={nextStep} endIcon={<ArrowForwardIcon />}></Button>
        )}

        {step === 1 && (
          <>
           <Button variant='text' onClick={previusStep} endIcon={<ArrowBackIcon />}></Button>
            <Button variant='text' onClick={nextStep} endIcon={<ArrowForwardIcon />}></Button>
           
          </>
        )}

        {step === 2 && (
          <>
            <Button variant='text' onClick={previusStep} endIcon={<ArrowBackIcon />}></Button>
          </>
        )}
        </Box>
        <Box>
        <Indicator step={step} handleStepChange={handleStepChange} />
        </Box>
      </CardActions>
    </Card>
    </Slide>
    
  )


}


export default MainCard