import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";

const Formstep4 = () => {
  return (
    <div>

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
    
          
    
            <div className="ml-32">
              <h1 className=" mt-16 text-[30px] font-[Ubuntu-Bold]">
              Finishing up
              </h1>
              <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
              Double-check everything looks OK before confirming.
              </p>
    
        <div className="bg-[#f0f6ff] mt-16 p-5 rounded-md shadow-sm">
            <div className="flex justify-between">
              <p className="text-[14px] font-[Ubuntu-Bold] ">Arcade (Monthly) <br /> <span className="font-[Ubuntu-Medium] text-[14px]">change</span></p>
            <p className="font-[Ubuntu-Bold]">+$9/mo</p>
            </div>

            <hr className="mt-6 mb-9" />
            <div className="flex justify-between">
              <p className="text-[14px] font-[Ubuntu-Medium] opacity-50 ">Online services </p>
            <p className="font-[Ubuntu-Regular] text-[14px]">+$9/mo</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] font-[Ubuntu-Medium] opacity-50 ">Larger storage </p>
            <p className="font-[Ubuntu-Regular]  text-[14px]">+$9/mo</p>
            </div>
           
        </div>

        <div className="flex justify-between mt-7 ">
              <p className="text-[14px] font-[Ubuntu-Medium] opacity-50 ">Total per year </p>
            <p className="font-[Ubuntu-Medium]  text-[21px] text-[#473dff]">$12/mo</p>
            </div>
            
                  <div className="flex justify-end">
                  <button className='mt-24 font-[Ubuntu-Regular] text-[16px] mr-64 opacity-50 '>Go back</button>
                    <div className="flex justify-end mt-24 ">
                    <button className="bg-[#090646de] p-3 text-white rounded-xl pl-9 pr-9" >
                      {" "}
                      Next step
                    </button>
                    </div>
                   
                  </div>
    
    
    
            </div>
          </div>
        </div>
    
    
        </div>
  )
}

export default Formstep4