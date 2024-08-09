import { useState } from "react";
import FormStep1 from "./Component/Formstep1";
import FormStep2 from "./Component/Formstep2";
import FormStep3 from "./Component/Formstep3";
import FormStep4 from "./Component/Formstep4";
import Submission from "./Component/Sumbission";
import "./index.css";

function App() {
  // State to track the current step of the form
  const [step, setStep] = useState(1);
  
  // State to store the selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Handler to update selected add-ons based on user input
  const handleAddOnChange = (id, product, price, isChecked) => {
    if (isChecked) {
      // Add the selected add-on to the array
      setSelectedAddOns([...selectedAddOns, { id, product, price }]);
    } else {
      // Remove the unselected add-on from the array
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn.id !== id));
    }
  };

  // Move to the next step
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Move to the previous step
  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Determine which component to display based on the current step
  let stepContent;
  if (step === 1) {
    stepContent = <FormStep1 onNext={handleNextStep} />;
  } else if (step === 2) {
    stepContent = (
      <FormStep2 onNext={handleNextStep} onBack={handlePreviousStep} />
    );
  } else if (step === 3) {
    stepContent = (
      <FormStep3
        onNext={handleNextStep}
        onBack={handlePreviousStep}
        selectedAddOns={selectedAddOns}
        onAddOnChange={handleAddOnChange}
      />
    );
  } else if (step === 4) {
    stepContent = (
      <FormStep4
        onNext={handleNextStep}
        onBack={handlePreviousStep}
        selectedAddOns={selectedAddOns}
      />
    );
  } else if (step === 5) {
    stepContent = <Submission onNext={handleNextStep} />;
  }

  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] lg:min-h-screen">
      {/* Render the component corresponding to the current step */}
      <div>{stepContent}</div>
    </div>
  );
}

export default App;
