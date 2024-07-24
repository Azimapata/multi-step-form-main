import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";
// import { useState } from "react";
// import Step2 from './Form-step2'
// import Step3 from './Form-step3'
// import Step4 from './Form-step2'

const Formstep1 = () => {
  // const [step, setSStep] = useState(2);

  // const handleNextStep = () => {
  //   setStep(prevStep => prevStep + 1);
  // };

  return (
    <div>
      {/* {step === 1 && <div>step 1</div>}
     
      {step === 3 && <div>step 3</div>} */}
      <div>
        <div className="flex mt-40 bg-[#fafbff] ml-96 mr-[500px] rounded-lg shadow-2xl">
          <div
            style={{
              backgroundImage: `url(${bgsidebardesktop})`,
              backgroundRepeat: `no-repeat`,
            }}
            className="ml-[20px] h-[600px] w-[300px] bg-cover mt-5 mb-5 rounded-2xl"
          >
            <div className="flex">
              <h1 className="{ inline-block w-[40px] h-[40px] rounded-[50%] bg-[#adbeff]  pl-[15px] pt-[7px] font-[Ubuntu-Medium] ml-9 mt-9 }">
                1
              </h1>
              <p className="ml-7 mt-9 text-white text-[11px]">
                Step 1 <br />{" "}
                <span className="font-[Ubuntu-Medium]  tracking-wider text-[13px]">
                  {" "}
                  YOUR INFO
                </span>
              </p>
            </div>
            <div className="flex">
              <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent  pl-[15px] pt-[7px] ml-9 mt-9 border-[1.2px] font-[Ubuntu-Medium]  text-white">
                2
              </h1>
              <p className="ml-7 mt-9 text-white text-[11px]">
                Step 2 <br />{" "}
                <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
                  {" "}
                  SELECT PLAN
                </span>
              </p>
            </div>
            <div className="flex">
              <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent  pl-[15px] pt-[7px] ml-9 mt-9 font-[Ubuntu-Medium]   border-[1.2px] text-white">
                3
              </h1>
              <p className="ml-7 mt-9 text-white text-[11px]">
                Step 3 <br />{" "}
                <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
                  {" "}
                  ADD-ONS
                </span>
              </p>
            </div>
            <div className="flex">
              <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent  pl-[15px] pt-[7px] ml-9 mt-9 font-[Ubuntu-Medium]  border-[1.2px] text-white">
                4
              </h1>
              <p className="ml-7 mt-9 text-white text-[11px]">
                Step 4 <br />{" "}
                <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
                  {" "}
                  SUMMARY
                </span>
              </p>
            </div>
          </div>

        

          <div className="ml-28">
            <h1 className=" mt-12 text-[30px] font-[Ubuntu-Bold]">
              Personal info
            </h1>
            <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Please provide your name, email address, and phone number.
            </p>

            <form>
              <p className="mt-7 font-[Ubuntu-Regular]">Name</p>

              <input
                type="text"
                placeholder="       e.g. Stephen King"
                className="w-[500px]   border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />

              <p className="mt-6 font-[Ubuntu-Regular]">Email Address</p>

              <input
                type="text"
                placeholder="       e.g. stephenking@lorem.com"
                className="w-[500px]   border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />

              <p className="mt-6 font-[Ubuntu-Regular]">Phone Number</p>

              <input
                type="text"
                placeholder="       e.g. +1 234 567 890"
                className="w-[500px]   border-[1px] rounded-[5px] font-[Ubuntu-Medium] h-[50px] text-[17px] mt-2 bg-[#fafbff] pl-5"
              />



              {/* <div className="flex justify-end mt-24 ">
                <button className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9" onClick={handleNextStep}>
                  {" "}
                  Next step
                </button>
              </div> */}

               {/* <div className='ml-28'>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          
          {step < 4 && (
            <div className='flex justify-end mt-24'>
              <button type="button" onClick={handleNextStep} className='bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9'>Next step</button>
            </div>
          )}
        </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formstep1;
