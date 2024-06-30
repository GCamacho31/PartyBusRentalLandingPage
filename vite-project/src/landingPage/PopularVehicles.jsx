import PopularVehiclesCard from "./PopularVechiclesCard";
import SprinterImg from '../assets/img/sprinter_van.jpg'


export default function PopularVehicles(props){

    return(

        <>

        <div className="row vh-75 d-flex align-items-center justify-content-center col-12 m-auto">

            <h3>Popular Vechicles Near You</h3>
            <PopularVehiclesCard img={SprinterImg} passengers="7 passengers" rate="From $200 per hour" />
            <PopularVehiclesCard img={SprinterImg} passengers="4 passengers" rate="From $100 per hour"  />
            <PopularVehiclesCard img={SprinterImg} passengers="5 passengers" rate="From $150 per hour"  />
            <PopularVehiclesCard img={SprinterImg} passengers="8 passengers" rate="From $220 per hour"  />


            <div className="col-12 col-md-6 mb-5 mt-5">
                <button className="mt-4 px-5 mainBtnBg bg-gradient">View All Avalable Rentals</button>
            </div>
            

        </div>

        
        


        </>


    )



}