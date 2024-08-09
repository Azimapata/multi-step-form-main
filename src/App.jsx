import { useState } from "react";
import FormStep1 from "./Component/Formstep1";
import FormStep2 from "./Component/Formstep2";
import FormStep3 from "./Component/Formstep3";
import FormStep4 from "./Component/Formstep4";
import Submission from "./Component/Sumbission";
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnChange = (id, product, price, isChecked) => {
    if (isChecked) {
      setSelectedAddOns([...selectedAddOns, { id, product, price }]);
    } else {
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn.id !== id));
    }
  };

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  let stepContent;
  if (step === 1) {
    stepContent = <FormStep1 onNext={handleNextStep} />;
  } else if (step === 2) {
    stepContent = <FormStep2 onNext={handleNextStep} onBack={handlePreviousStep} />;
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
      <div>
        {stepContent}
      </div>
    </div>
  );
}

export default App;
