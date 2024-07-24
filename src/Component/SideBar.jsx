import bgsidebardesktop from "../images/bg-sidebar-desktop.svg";

const Sidebar = () => {


  
  return (
    <div>
         <div
            style={{
              backgroundImage: `url(${bgsidebardesktop})`,
              backgroundRepeat: `no-repeat`,
            }}
            className="ml-[20px] h-[600px] w-[300px] bg-cover mt-5 mb-5 rounded-2xl"
          >
            <div className="flex">
              <h1 className=" inline-block w-[40px] h-[40px] rounded-[50%] bg-[#adbeff]  pl-[15px] pt-[7px] font-[Ubuntu-Medium] ml-9 mt-9 ">
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
    </div>
  )
}

export default Sidebar