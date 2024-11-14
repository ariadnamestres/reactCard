import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Indicator = ({step, handleStepChange}) => {

  return(
    <Box>
    <Button onClick={()=>handleStepChange(0)} sx={{ borderRadius: 20, color: 'white' ,backgroundColor: step === 0 ? 'secondary.main' : 'secondary.light'  }} >1</Button>
    <Button  onClick={()=>handleStepChange(1)} sx={{ borderRadius: 20, color: 'white' , backgroundColor: step === 1 ? 'secondary.main' : 'secondary.light' }}>2</Button>
    <Button  onClick={()=>handleStepChange(2)}sx={{ borderRadius: 20,color: 'white' , backgroundColor: step === 2 ? 'secondary.main' : 'secondary.light' }}>3</Button>
  </Box>

  )
}

export default Indicator