import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Registration() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Registration
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1>

               <div className="page-info">
                    {/* pre-registration */}
                    <div className="info-box">
                         <h1 className="info-title">Pre-registration (optional)</h1>
                         <div className="info-text">
                              <p>
                                   In order to receive information about the congress you will need to submit the pre-registration form.
                              </p>
                         </div>
                         {/* button */}
                         <NavLink className="button-long-blue" to="/preregistration-form">I want to pre-register</NavLink>


                    </div>

                    {/* registration */}
                    <div className="info-box">
                         <h1 className="info-title">Registration</h1>
                         <div className="info-text">
                              <p>
                                   If you want to attend the congress, you will need to submit the registration form.
                              </p>
                         </div>
                         {/* button */}
                         <NavLink className="button-long-pink" to="/registration-info">I want to register</NavLink>

                    </div>
               </div>

               <Footer />
          </motion.div>
     )
}
