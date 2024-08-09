import PropTypes from "prop-types";
// import { useState } from "react";
import Sidebar from "./SideBar";

const Formstep3 = ({ onNext, onBack }) => {

  // const [selectedAddOns, setSelectedAddOns] = useState([]);

  // const addOns = [
  //   { id: 1, product: 'Online Services', price: "+$1" },
  //   { id: 2, product: 'Larger storage', price: "+$2" },
  //   { id: 3, product: 'Customizable Profile', price: "+$2" },
    
  // ];

   return (
    <div>
      <div>
        <div className="flex  bg-[#fafbff]  rounded-lg shadow-2xl">
          <div>
            <Sidebar />
          </div>
          <div className="ml-20 mr-16">
            <h1 className="mt-16 text-[30px] font-[Ubuntu-Bold]">Pick add-ons</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Add-ons help enhance your gaming experience.
            </p>
            <div>
              <div className="flex items-center mt-11 hover:border-blue-800 duration-1000 border-[1px] p-3 rounded-lg">
                <input
                  type="checkbox"
                  name="onlineService"
                 
                  className="mr-4 text-indigo-600 form-checkbox ml-7"
                />
                <p className="ml-2 font-[Ubuntu-Bold]">
                  Online service <br />
                  <span className="text-[14px] font-[Ubuntu-Medium] opacity-50">Access to multiplayer game</span>
                </p>
                <p className="ml-36 font-[Ubuntu-Regular] text-[14px] text-purple-900">+$1/mo</p>
              </div>
              <div className="flex items-center hover:border-blue-800 duration-1000 border-[1px] p-3 rounded-lg mt-4 pr-6">
                <input
                  type="checkbox"
                  name="largerStorage"
                
                  className="mr-2 text-indigo-600 form-checkbox ml-7"
                />
                <p className="ml-2 font-[Ubuntu-Bold]">
                  Larger storage<br />
                  <span className="text-[14px] font-[Ubuntu-Medium] opacity-50">Extra 1TB of cloud save</span>
                </p>
                <p className="ml-44 font-[Ubuntu-Regular] text-[14px]">+$2/mo</p>
              </div>
              <div className="flex items-center hover:border-blue-800 duration-1000 border-[1px] p-3 rounded-lg mt-4">
                <input
                  type="checkbox"
                  name="customizableProfile"
                 
                  className="mr-4 text-indigo-600 form-checkbox ml-7"
                />
                <p className="ml-2 font-[Ubuntu-Bold]">
                  Customizable Profile <br />
                  <span className="text-[14px] font-[Ubuntu-Medium] opacity-50">Custom theme on your profile</span>
                </p>
                <p className="ml-32 font-[Ubuntu-Regular] text-[14px]">+$2/mo</p>
              </div>
            </div>
            <div className="flex justify-end ml-11">
              <button
                className="mt-24 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50 "
                onClick={onBack}
              >
                Go back
              </button>
              <div className="flex justify-end mt-24 mr-14">
                <button
                  className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9"
                  onClick={onNext}
                  
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

Formstep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Formstep3;
