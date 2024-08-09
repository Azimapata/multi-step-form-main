import PropTypes from "prop-types";
import Sidebar from "./SideBar";
import { useState } from "react";

const Formstep1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "This field is required";
    }

    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (!formData.phone) {
      newErrors.phone = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onNext();
    }
  };

  const getInputClass = (error) =>
    ` w-[400px]  lg:w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 pl-5  ${
      error ? "border-red-500" : "border-gray-300"
    } bg-[#fafbff]`;

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row  bg-[#fafbff] rounded-lg shadow-2xl">
          <div>
            <Sidebar />
          </div>
          <div className=" ml-1 absolute lg:relative inset-0 lg:ml-11 bg-[#fafbff] lg:bg-transparent rounded-lg lg:rounded-none shadow-2xl lg:shadow-none mt-80 lg:mt-0 p-12 container  pr-16 " >
            <h1 className=" mt-1 lg:mt-4 text-[30px] font-[Ubuntu-Bold]">
              Personal info
            </h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={handleNext}> 
              <div className="container relative mb-6">
                <p className="mt-7 font-[Ubuntu-Regular]">Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Stephen King"
                  className={getInputClass(errors.name)}
                />
                {errors.name && (
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular] ">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="container relative mb-6">
                <p className="font-[Ubuntu-Regular]">Email Address</p>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. stephenking@lorem.com"
                  className={getInputClass(errors.email)}
                />
                {errors.email && (
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular] ">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="relative mb-6">
                <p className="font-[Ubuntu-Regular]">Phone Number</p>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 234 567 890"
                  className={getInputClass(errors.phone)}
                />
                {errors.phone && (
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Medium] ">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-20 ">
                <button
                  type="submit"
                  className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9"
                >
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
