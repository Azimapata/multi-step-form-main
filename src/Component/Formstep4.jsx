import PropTypes from "prop-types";
// import Sidebar from "./SideBar";

const Formstep4 = ({ onNext, onBack, selectedAddOns }) => {
  // Calculate the total cost of selected add-ons
  const totalCost = selectedAddOns.reduce((total, addOn) => total + parseInt(addOn.price.slice(2)), 0);

  return (
    <div>
      <div>
        {/* Main container for form and sidebar */}
        <div className="flex ">
          {/* Sidebar component */}
          {/* <div>
            <Sidebar />
          </div> */}
          {/* Summary and confirmation section */}
          <div className="ml-20 mr-32">
            <h1 className="mt-12 text-[30px] font-[Ubuntu-Bold]">Finishing up</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Double-check everything looks OK before confirming.
            </p>
            {/* Summary of selected plan and add-ons */}
            <div className="bg-[#f0f6ff] mt-12 p-5 rounded-md shadow-sm">
              <div className="flex justify-between">
                <p className="text-[14px] font-[Ubuntu-Bold]">
                  Arcade (Monthly) <br />
                  <span className="font-[Ubuntu-Medium] text-[14px]">change</span>
                </p>
                <p className="font-[Ubuntu-Bold]">+$9/mo</p>
              </div>
              <hr className="mt-6 mb-9" />
              {/* Display each selected add-on */}
              {selectedAddOns.map((addOn) => (
                <div key={addOn.id} className="flex justify-between mt-4">
                  <p className="text-[14px] font-[Ubuntu-Medium] opacity-50">{addOn.product}</p>
                  <p className="font-[Ubuntu-Regular] text-[14px]">{addOn.price}/mo</p>
                </div>
              ))}
            </div>
            {/* Display the total cost including the base plan */}
            <div className="flex justify-between mt-7">
              <p className="text-[14px] font-[Ubuntu-Medium] opacity-50">Total per month</p>
              <p className="font-[Ubuntu-Medium] text-[21px] text-[#473dff]">${totalCost + 9}/mo</p>
            </div>
            <div className="flex justify-end">
              {/* Go back button */}
              <button className="mt-24 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50" onClick={onBack}>
                Go back
              </button>
              {/* Confirm button */}
              <div className="flex justify-end mt-24">
                <button className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9" onClick={onNext}>
                  Confirm
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
Formstep4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  selectedAddOns: PropTypes.array.isRequired,
};

export default Formstep4;
