import { useState } from 'react'
import './App.css'
import MainCard from './components/Card'
import { Box } from '@mui/material'


const tutorialData= [
  { title: 'Pas1 - Dedica moltes hores',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    image : '/image.jpeg'
  },
  { title: 'Pas 2- Investiga',
    description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.fermentum.',
    image : '/paraguas.jpeg'
  },
  { title: 'pas 3- Comparteix',
    description: 'Nulla gravida orci a odio. Nullam variusNulla gravida orci a odio. Nullam variusNulla gravida orci a odio. Nullam varius',
    image : '/women.jpeg'
  }


]



function App() {
  const [step, setStep] = useState(0)
  // const [slideDirection, setSlideDirection] = useState('left') 
  // estado para controlar animaciones
  const [checked, setChecked] = useState(true)
 
  const nextStep = () => {
    if( step < tutorialData.length- 1 ){
    setChecked(false)
    setTimeout(() => {
      setStep(step + 1)
      setChecked(true)
    }, 500)

    setStep(step + 1)
    }
   else {
      setStep(0)
    }
  }

  const previusStep = () => {
    if( step > 0 ){
      setChecked(false)
      setTimeout(() => {
        setStep(step - 1)
        setChecked(true)
      }, 500)
      setStep(step - 1)
    } else {
      setStep(tutorialData.length- 1)
    }
  }

  const handleStepChange= (stepButtonPrinted)=> {
    setStep(stepButtonPrinted)
  }
  


  return (
    <>
      <Box>
        <MainCard 
         nextStep={nextStep} 
         previusStep={previusStep}
         step={step}
         tutorialData={tutorialData}
         handleStepChange={handleStepChange}
        //  setSlideDirection={setSlideDirection}
        //  slideDirection={slideDirection}
         setChecked={setChecked}
         checked={checked}
  
         />  
      </Box>

    
    </>
  )
}

export default App
