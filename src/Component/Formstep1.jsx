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
    `w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 pl-5 ${
      error ? "border-red-500" : "border-gray-300"
    } bg-[#fafbff]`;

  return (
    <div>
      <div>
        <div className="flex mt-40 bg-[#fafbff] ml-72 mr-[400px] rounded-lg shadow-2xl">
          <div>
            <Sidebar />
          </div>
          <div className="ml-28">
            <h1 className="mt-12 text-[30px] font-[Ubuntu-Bold]">
              Personal info
            </h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={handleNext}>
              <div className="relative mb-6">
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
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular]">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="relative mb-6">
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
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular]">
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
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Medium]">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-24">
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
