import GetItOn from "./GetItOn.jsx";

import GooglePlayLogo from "../assets/img/google-play-badge-logo-png-transparent.png";
import AppStoreLogo from "../assets/img/app-store-logo.png";
import IphoneView from "../assets/img/iPhone-14-Pro.png";

export default function OnwardCard(){


    return(

        <>
        
        <div className="row mt-5">

        <div className="col-10 m-auto mainBgColor rounded rounded-5 d-flex ">


            <div className="col-12 col-md-6 text-start mx-3 mx-md-5 mt-5 mb-5">

            <p className="mb-5 h1">Onward with Chariot</p   >

            <p className="h4">
            Your Personal Chauffeur, at Your Fingertips.
            Swift, Stylish, and Just a Tap Away!
            </p>

            <ul>
                <li>Personalised Chauffeur</li>
                <li>Quick Bookings</li>
                <li>Easy Future Reservations</li>
                <li>Easy To Use</li>
            </ul>

            {/* <img src={IphoneView} alt=""  className="img-fluid iphoneView" /> */}



            <div className="d-flex col-8">
                <div className="col-md-5 col-lg-6 col-xl-5 col-8 mx-2">
                <a href="#"><img src={GooglePlayLogo} alt="" className="img-fluid"/></a>
                </div>

                <div className="col-md-5 col-lg-6 col-xl-5 col-8">
                <a href="#"><img src={AppStoreLogo} alt="" className="img-fluid rounded rounded-2"/></a>
                </div>

            
            </div>

            
          
            
                
            </div>      

       
            
            <div className="col-6 d-flex ">
            <img src={IphoneView} alt=""  className="iphoneView" />
        </div>  


        </div>

       


        


        </div>
            

        
        </>


    )


}