const Sidebar = () => {
  return (
    <div>
      {/* Sidebar container */}
      <div
        className="ml-[0px] lg:ml-[20px] h-[200px] lg:h-[600px] w-[380px] lg:w-[250px] bg-cover -mt-40 lg:mt-5 mb-5 rounded-2xl background flex lg:block"
      >
        {/* Step 1 */}
        <div className="flex">
          <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-[#adbeff] pl-[15px] pt-[7px] font-[Ubuntu-Medium] ml-16 lg:ml-9 mt-10 lg:mt-9">
            1
          </h1>
          <p className="ml-7 mt-9 text-white text-[11px] hidden lg:block">
            Step 1 <br />
            <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
              YOUR INFO
            </span>
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex">
          <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent pl-[15px] pt-[7px] ml-9 lg:ml-9 mt-10 lg:mt-9 border-[1.2px] font-[Ubuntu-Medium] text-white">
            2
          </h1>
          <p className="ml-7 mt-9 text-white text-[11px] hidden lg:block">
            Step 2 <br />
            <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
              SELECT PLAN
            </span>
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex">
          <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent pl-[15px] pt-[7px] ml-9 lg:ml-9 mt-10 lg:mt-9 border-[1.2px] font-[Ubuntu-Medium] text-white">
            3
          </h1>
          <p className="ml-7 mt-9 text-white text-[11px] hidden lg:block">
            Step 3 <br />
            <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
              ADD-ONS
            </span>
          </p>
        </div>
        {/* Step 4 */}
        <div className="flex">
          <h1 className="inline-block w-[40px] h-[40px] rounded-[50%] bg-transparent pl-[15px] pt-[7px] ml-9 lg:ml-9 mt-10 lg:mt-9 border-[1.2px] font-[Ubuntu-Medium] text-white">
            4
          </h1>
          <p className="ml-7 mt-9 text-white text-[11px] hidden lg:block">
            Step 4 <br />
            <span className="font-[Ubuntu-Medium] tracking-wider text-[13px]">
              SUMMARY
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
