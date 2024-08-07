import PropTypes from "prop-types";
import Sidebar from "./SideBar";

const Formstep4 = ({ onNext, onBack }) => {
  return (
    <div>
      <div>
        <div className="flex  bg-[#fafbff]  rounded-lg shadow-2xl">
          <div>
            <Sidebar  />
          </div>
          <div className="ml-20 mr-32">
            <h1 className="mt-16 text-[30px] font-[Ubuntu-Bold]">Finishing up</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Double-check everything looks OK before confirming.
            </p>
            <div className="bg-[#f0f6ff] mt-16 p-5 rounded-md shadow-sm">
              <div className="flex justify-between">
                <p className="text-[14px] font-[Ubuntu-Bold]">
                  Arcade (Monthly) <br />
                  <span className="font-[Ubuntu-Medium] text-[14px]">change</span>
                </p>
                <p className="font-[Ubuntu-Bold]">+$9/mo</p>
              </div>
              <hr className="mt-6 mb-9" />
              <div className="flex justify-between">
                <p className="text-[14px] font-[Ubuntu-Medium] opacity-50">Online services</p>
                <p className="font-[Ubuntu-Regular] text-[14px]">+$9/mo</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-[14px] font-[Ubuntu-Medium] opacity-50">Larger storage</p>
                <p className="font-[Ubuntu-Regular] text-[14px]">+$9/mo</p>
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <p className="text-[14px] font-[Ubuntu-Medium] opacity-50">Total per year</p>
              <p className="font-[Ubuntu-Medium] text-[21px] text-[#473dff]">$12/mo</p>
            </div>
            <div className="flex justify-end">
              <button className="mt-24 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50" onClick={onBack}>
                Go back
              </button>
              <div className="flex justify-end mt-24 ">
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

Formstep4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Formstep4;
