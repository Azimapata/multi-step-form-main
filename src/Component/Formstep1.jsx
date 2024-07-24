import PropTypes from "prop-types";
import Sidebar from "./SideBar";

const Formstep1 = ({ onNext }) => {
  return (
    <div>
      <div>
        <div className="flex mt-40 bg-[#fafbff] ml-96 mr-[400px] rounded-lg shadow-2xl">
          <div>
            <Sidebar  />
          </div>
          <div className="ml-28">
            <h1 className="mt-12 text-[30px] font-[Ubuntu-Bold]">Personal info</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Please provide your name, email address, and phone number.
            </p>
            <form>
              <p className="mt-7 font-[Ubuntu-Regular]">Name</p>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                className="w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />
              <p className="mt-6 font-[Ubuntu-Regular]">Email Address</p>
              <input
                type="text"
                placeholder="e.g. stephenking@lorem.com"
                className="w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />
              <p className="mt-6 font-[Ubuntu-Regular]">Phone Number</p>
              <input
                type="text"
                placeholder="e.g. +1 234 567 890"
                className="w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />
              <div className="flex justify-end mt-24">
                <button className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9" onClick={onNext}>
                  Next step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Formstep1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Formstep1;
