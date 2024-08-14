
import PropTypes from "prop-types";

const Sidebar = ({ currentStep }) => {
  const getStepClass = (step) => {
    if (step === currentStep) {
      return "bg-[#adbeff] text-black border-transparent";
    } else {
      return "bg-transparent text-white border-white";
    }
  };

  return (
    <div>
      <div className="ml-[0px] lg:ml-[20px] h-[200px] lg:h-[600px] w-[380px] lg:w-[250px] bg-cover -mt-40 lg:mt-5 mb-5 rounded-2xl background flex lg:block">
        {[1, 2, 3, 4].map((step) => (
          <div className="flex" key={step}>
            <h1
              className={`inline-block w-[40px] h-[40px] rounded-[50%] pl-[15px] pt-[7px] ml-16 lg:ml-9 mt-10 lg:mt-9 font-[Ubuntu-Medium] border-[1.2px] ${getStepClass(
                step
              )}`}
            >
              {step}
            </h1>
            <p className="ml-7 mt-9 text-white text-[11px] hidden lg:block">
              Step {step} <br />
              <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
                {step === 1 && "YOUR INFO"}
                {step === 2 && "SELECT PLAN"}
                {step === 3 && "ADD-ONS"}
                {step === 4 && "SUMMARY"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default Sidebar;
