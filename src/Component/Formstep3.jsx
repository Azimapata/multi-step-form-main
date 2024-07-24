import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";

const Formstep3 = () => {
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

      

        <div className="ml-20">
          <h1 className=" mt-16 text-[30px] font-[Ubuntu-Bold]">
          Pick add-ons
          </h1>
          <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
          Add-ons help enhance your gaming experience.
          </p>

     <div>
   
      <div className=" flex items-center mt-11  hover:border-blue-800  duration-1000 border-[1px] p-3 rounded-lg">
      <input type="checkbox" className="form-checkbox text-indigo-600 ml-7 mr-4 "/>
      <p className="ml-2 font-[Ubuntu-Bold] "> Online service <br /> <span className="text-[14px] font-[Ubuntu-Medium] opacity-50"> Access to multiplayer game</span></p>
      <p className="ml-36 font-[Ubuntu-Regular] text-[14px] text-purple-900">+$1/mo</p>
    </div>
      <div className=" flex items-center  hover:border-blue-800  duration-1000  border-[1px] p-3 rounded-lg mt-4 ">
      <input type="checkbox" className="form-checkbox text-indigo-600 ml-7 mr-4 "/>
      <p className="ml-2 font-[Ubuntu-Bold] ">  Larger storage<br /> <span className="text-[14px] font-[Ubuntu-Medium] opacity-50"> Extra 1TB of cloud save</span></p>
      <p className="ml-44 font-[Ubuntu-Regular] text-[14px]">+$2/mo</p>
    </div>
      <div className=" flex items-center  hover:border-blue-800  duration-1000  border-[1px] p-3 rounded-lg mt-4 ">
      <input type="checkbox" className="form-checkbox text-indigo-600 ml-7 mr-4 "/>
      <p className="ml-2 font-[Ubuntu-Bold] ">   Customizable Profile <br /> <span className="text-[14px] font-[Ubuntu-Medium] opacity-50"> Custom theme on your profile</span></p>
      <p className="ml-32 font-[Ubuntu-Regular] text-[14px]">+$2/mo</p>
    </div>


      
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

export default Formstep3