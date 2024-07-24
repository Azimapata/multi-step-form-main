

import thankyou from '../images/icon-thank-you.svg'
import Sidebar from './SideBar';
const Sumbission = () => {
  return (
 
    <div>
          <div>

<div>
      <div className="flex mt-40 bg-[#fafbff] ml-96 mr-[400px] rounded-lg shadow-2xl">
        

      <div>
     <Sidebar/>
     </div>

      

        <div className="mx-auto">
         
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

export default Sumbission