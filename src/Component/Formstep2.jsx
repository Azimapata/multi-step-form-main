import arcade from '../images/icon-arcade.svg'
import advance from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";
const Formstep2 = () => {
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

      

        <div className="ml-28">
          <h1 className=" mt-16 text-[30px] font-[Ubuntu-Bold]">
          Select your plan
          </h1>
          <p className="font-[Ubuntu-Regular] text-[16px] opacity-50">
          You have the option of monthly or yearly billing.
          </p>

          <div className="flex mt-14">
            <div className=' border-[1px] hover:border-blue-800  duration-1000 pt-6 pb-5 pl-5 pr-12 rounded-lg '>
            <img className='' src={arcade} alt="" />
            <p className='pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight'>Arcade <br /> <span className='text-[11px] font-[Ubuntu-Medium]'>$9/mo</span>
            </p>
            </div>
            <div className='ml-5 border-[1px]  hover:border-blue-800  pt-6 pb-5   pl-5 pr-9  rounded-lg'>
          <img src={advance} alt="" />
          <p className='pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight'>Advanced <br /> <span className='text-[11px] font-[Ubuntu-Medium]'>$12/mo</span>
          </p>
            </div>
            <div className='ml-5 border-[1px] hover:border-blue-800  pt-6 pb-5 pl-8 pr-12  rounded-lg'>
          <img src={pro} alt="" />
          <p className='pt-9 text-[16px] font-[Ubuntu-Bold] leading-tight'>Pro <br /> <span className='text-[11px] font-[Ubuntu-Medium]'>$15/mo</span>
          </p>
            </div>
          </div>

        
              <div className="flex ">
              <button className='mt-24 font-[Ubuntu-Regular] text-[16px] mr-60 opacity-50 '>Go back</button>
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

export default Formstep2