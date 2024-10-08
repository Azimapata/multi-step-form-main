import PropTypes from "prop-types";
import arcade from "../images/icon-arcade.svg";
import advance from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
// import Sidebar from "./SideBar";
import { useState } from "react";

const Formstep2 = ({ onNext, onBack }) => {
  // State to manage the billing cycle (monthly or yearly)
  const [isYearly, setIsYearly] = useState(false);

  // State to manage the selected plan
  const [selectedPlan, setSelectedPlan] = useState("");

  // Toggle between yearly and monthly billing
  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Determine the CSS classes for plan cards based on the selected plan
  const getPlanClass = (plan) =>
    `border-[1px] pt-6 pb-9 pl-5 pr-12 rounded-lg ${
      selectedPlan === plan ? "border-blue-800" : "border-gray-300"
    } hover:border-blue-800 duration-1000`;

  return (
    <div>
      <div>
        {/* Main container for form and sidebar */}
        <div className="flex ">
          {/* Sidebar component */}
          {/* <div>
            <Sidebar />
          </div> */}
          {/* Plan selection section */}
          <div className="ml-24 mr-28">
            <h1 className="mt-16 text-[30px] font-[Ubuntu-Bold]">
              Select your plan
            </h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              You have the option of monthly or yearly billing.
            </p>
            <div className="flex mt-11">
              {/* Arcade plan card */}
              <div
                className={getPlanClass("arcade")}
                onClick={() => handlePlanSelect("arcade")}
              >
                <img src={arcade} alt="Arcade" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Arcade <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">
                    {isYearly ? "$90/yr" : "$9/mo"}
                  </span>
                </p>
              </div>
              {/* Advanced plan card */}
              <div
                className={`${getPlanClass("advanced")} ml-5`}
                onClick={() => handlePlanSelect("advanced")}
              >
                <img src={advance} alt="Advanced" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Advanced <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">
                    {isYearly ? "$120/yr" : "$12/mo"}
                  </span>
                </p>
              </div>
              {/* Pro plan card */}
              <div
                className={`${getPlanClass("pro")} ml-5`}
                onClick={() => handlePlanSelect("pro")}
              >
                <img src={pro} alt="Pro" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Pro <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">
                    {isYearly ? "$150/yr" : "$15/mo"}
                  </span>
                </p>
              </div>
            </div>
            {/* Billing cycle toggle */}
            <div className="flex items-center mt-12 justify-items-center bg-[#f0f6ff] p-3 w-[430px]">
              <p className="pr-3 ml-28 font-[Ubuntu-Regular]">Monthly</p>
              <label className="relative inline-block w-8 h-4">
                <input
                  type="checkbox"
                  className="w-0 h-0 opacity-0 peer"
                  onChange={handleToggle}
                />
                <span className="absolute inset-0 transition duration-300 bg-gray-300 rounded-full cursor-pointer peer-checked:bg-[#090646de]"></span>
                <span className="absolute left-0.5 top-0.5 h-3 w-3 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-4"></span>
              </label>
              <p className="pl-3 text-[#090646de font-[Ubuntu-Medium]">Yearly</p>
            </div>
            <div className="flex">
              {/* Go back button */}
              <button
                className="mt-24 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50"
                onClick={onBack}
              >
                Go back
              </button>
              {/* Next step button */}
              <div className="flex justify-end mt-24">
                <button
                  className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9"
                  onClick={onNext}
                  disabled={!selectedPlan}
                >
                  Next step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
Formstep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Formstep2;
