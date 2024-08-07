import  { useState } from "react";
// import Sidebar from "./Component/SideBar";
import FormStep1 from "./Component/Formstep1";
import FormStep2 from "./Component/Formstep2";
import FormStep3 from "./Component/Formstep3";
import FormStep4 from "./Component/Formstep4";
import Submission from "./Component/Sumbission";
// import Formstep1 from './Component/Formstep1'
// import Formstep2 from './Component/Formstep2'
// import Formstep3 from './Component/Formstep3'
// import Formstep4 from './Component/Formstep4'
// import Sumbission from './Component/Sumbission'
import './index.css'

function App() {
  
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };
  

  const handlePreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  let stepContent;
  if (step === 1) {
    stepContent = <FormStep1 onNext={handleNextStep}  />;
  } else if (step === 2) {
    stepContent = <FormStep2 onNext={handleNextStep} onBack={handlePreviousStep} />;
  } else if (step === 3) {
    stepContent = <FormStep3  onNext={handleNextStep} onBack={handlePreviousStep} />;
  } else if (step === 4) {
    stepContent = <FormStep4  onNext={handleNextStep}  onBack={handlePreviousStep} />;
  } else if (step === 5){
    stepContent = <Submission  onNext={handleNextStep}/>
  }
  
  

  


  return (
    <>
    {/* <Formstep1/> */}
    {/* <Formstep2/> */}
    {/* <Formstep3/> */}
    {/* <Formstep4/> */}
    {/* <Sumbission/> */}
    
      {/* <Sidebar /> */}
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="">
          {stepContent}
        </div>
      </div>
 
    </>
  )
}

export default App
