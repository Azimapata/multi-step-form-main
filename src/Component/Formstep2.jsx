import PropTypes from "prop-types";
import arcade from "../images/icon-arcade.svg";
import advance from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import Sidebar from "./SideBar";

const Formstep2 = ({ onNext, onBack }) => {
  return (
    <div>
      <div>
        <div className="flex mt-40 bg-[#fafbff] ml-96 mr-[400px] rounded-lg shadow-2xl">
          <div>
            <Sidebar  />
          </div>
          <div className="ml-28">
            <h1 className="mt-16 text-[30px] font-[Ubuntu-Bold]">Select your plan</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              You have the option of monthly or yearly billing.
            </p>
            <div className="flex mt-14">
              <div className="border-[1px] hover:border-blue-800 duration-1000 pt-6 pb-5 pl-5 pr-12 rounded-lg">
                <img src={arcade} alt="" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Arcade <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">$9/mo</span>
                </p>
              </div>
              <div className="ml-5 border-[1px] hover:border-blue-800 pt-6 pb-5 pl-5 pr-9 rounded-lg">
                <img src={advance} alt="" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Advanced <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">$12/mo</span>
                </p>
              </div>
              <div className="ml-5 border-[1px] hover:border-blue-800 pt-6 pb-5 pl-8 pr-12 rounded-lg">
                <img src={pro} alt="" />
                <p className="pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight">
                  Pro <br />
                  <span className="text-[11px] font-[Ubuntu-Medium]">$15/mo</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <button className="mt-24 font-[Ubuntu-Regular] text-[16px] mr-60 opacity-50" onClick={onBack}>
                Go back
              </button>
              <div className="flex justify-end mt-24">
                <button className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9" onClick={onNext}>
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

Formstep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Formstep2;
