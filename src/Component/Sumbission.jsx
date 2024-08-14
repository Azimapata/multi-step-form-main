import PropTypes from "prop-types";
import thankyou from '../images/icon-thank-you.svg';


const Sumbission = () => {
  return (
    <div>
      {/* Main container for the form and sidebar */}
      <div>
        {/* Layout with sidebar and main content */}
        <div className="flex ">
          {/* Sidebar component */}
         
          {/* Main content section */}
          <div className="mx-auto ml-20 mr-32">
            {/* Centered thank you message */}
            <div className="mx-auto text-center mt-44">
              {/* Thank you image */}
              <img src={thankyou} className="mx-auto" alt="Thank You" />
              <h1 className="mt-6 font-[Ubuntu-Bold] mb-5 text-[30px]">Thank you!</h1>
              <p className="font-[Ubuntu-Regular] opacity-50">
                Thanks for confirming your subscription! We hope you have
                <br />
                fun using our platform. If you ever need support, please feel
                <br />
                <span className="ml-7">free to email us at support@loremgaming.com.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
Sumbission.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Sumbission;
