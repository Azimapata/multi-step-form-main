import PropTypes from "prop-types";
import Sidebar from "./SideBar";

const Formstep3 = ({ onNext, onBack, selectedAddOns, onAddOnChange }) => {
  const addOns = [
    { id: 1, product: "Online Services", price: "+$1" },
    { id: 2, product: "Larger storage", price: "+$2" },
    { id: 3, product: "Customizable Profile", price: "+$3" },
  ];

  const handleCheckboxChange = (e, addOn) => {
    onAddOnChange(addOn.id, addOn.product, addOn.price, e.target.checked);
  };

  return (
    <div>
      <div>
        <div className="flex  bg-[#fafbff]  rounded-lg shadow-2xl">
          <div>
            <Sidebar />
          </div>
          <div className="ml-12 mr-16">
            <h1 className="mt-16 text-[30px] font-[Ubuntu-Bold]">Pick add-ons</h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Add-ons help enhance your gaming experience.
            </p>
            <div>
              {addOns.map((addOn) => (
                <div key={addOn.id} className="flex items-center mt-4 hover:border-blue-800 duration-1000 border-[1px] p-3 rounded-lg">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.some((selected) => selected.id === addOn.id)}
                    onChange={(e) => handleCheckboxChange(e, addOn)}
                    className="mr-4 text-indigo-600 form-checkbox ml-7"
                  />
                  <p className="ml-2 font-[Ubuntu-Bold]">
                    {addOn.product} <br />
                    <span className="text-[14px] font-[Ubuntu-Medium] opacity-50">Details about {addOn.product}</span>
                  </p>
                  <p className="ml-36 font-[Ubuntu-Regular] text-[14px] text-purple-900">{addOn.price}/mo</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end ml-11">
              <button className="mt-10 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50" onClick={onBack}>
                Go back
              </button>
              <div className="flex justify-end mt-14 mr-14">
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

Formstep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  selectedAddOns: PropTypes.array.isRequired,
  onAddOnChange: PropTypes.func.isRequired,
};

export default Formstep3;
