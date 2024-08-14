import PropTypes from "prop-types";

import { useState } from "react";

const Formstep1 = ({ onNext }) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input changes and clear errors for the changed field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate form data and move to the next step if valid
  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate name field
    if (!formData.name) {
      newErrors.name = "This field is required";
    }

    // Validate email field
    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    // Validate phone number field
    if (!formData.phone) {
      newErrors.phone = "This field is required";
    }

    // Update errors state if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed to the next step if no errors
      onNext();
    }
  };

  // Determine input field styles based on validation errors
  const getInputClass = (error) =>
    `w-[400px] lg:w-[500px] border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 pl-5 ${
      error ? "border-red-500" : "border-gray-300"
    } bg-[#fafbff]`;

  return (
    <div>
      <div>
        {/* Container for form and sidebar */}
        <div className="flex flex-col lg:flex-row ">
          {/* Sidebar component */}
          {/* <div>
            <Sidebar />
          </div> */}
          {/* Form section */}
          <div className="container absolute p-12 pr-16 ml-1 rounded-none lg:relative lg:ml-11 lg:bg-transparent mt-80 lg:mt-0">
            <h1 className="mt-1 lg:mt-4 text-[30px] font-[Ubuntu-Bold]">
              Personal info
            </h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={handleNext}>
              {/* Name input field */}
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
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular]">
                    {errors.name}
                  </p>
                )}
              </div>
              {/* Email input field */}
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
                  <p className="absolute top-[-20px] right-0 text-red-500 text-sm bg-white px-1 mt-8 font-[Ubuntu-Regular]">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Phone number input field */}
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

              {/* Submit button */}
              <div className="flex justify-end mt-20">
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

// Define prop types for validation
Formstep1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Formstep1;
