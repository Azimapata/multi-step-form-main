import PropTypes from "prop-types";

import thankyou from '../images/icon-thank-you.svg'
import Sidebar from './SideBar';
const Sumbission = () => {
  return (
 
    <div>
          <div>

<div>
      <div className="flex  bg-[#fafbff]  rounded-lg shadow-2xl">
        

      <div>
     <Sidebar/>
     </div>

      

        <div className="mx-auto ml-20 mr-32">
         
    <div  className="mx-auto mt-44 ">
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

Sumbission.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Sumbission