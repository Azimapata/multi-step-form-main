
import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";
import thankyou from '../images/icon-thank-you.svg'

const Sumbission = () => {
  return (
 
    <div>
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

      

        <div className="mx-auto">
         
    <div  className="mt-44 mx-auto ">
    <img src={thankyou} className="ml-36" alt="" />
            <h1 className="mt-6 font-[Ubuntu-Bold] ml-28 mb-5  text-[30px]">Thank you!</h1>
            <p className="font-[Ubuntu-Regular] opacity-50" >Thanks for confirming your subscription! We hope you have <br />
            fun using our platform. If you ever need support, please feel <br />
           <span className="ml-7"> free to email us at support@loremgaming.com. </span></p>
    </div>
      



        </div>
      </div>
    </div>


    </div>
    </div>
  )
}

export default Sumbission