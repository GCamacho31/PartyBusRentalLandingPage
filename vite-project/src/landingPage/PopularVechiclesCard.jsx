import { faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PopularVehiclesCard({img, passengers, rate}){
    return (


        <>
        

        <div className="col-12 col-md-6 col-lg-5 mx-2 mt-3">

                            <div className="card p-1 rounded shadow ">
                                <img src={img}  className="card-img-top popular-vehicles-img" alt="..."/>
                                
                                <div className="card-body p-0 text-start mx-2">
                                    <b>2023 Mercedes Benz</b>
                                    <div class="small-ratings">
                                       
                                        <FontAwesomeIcon icon={faStar} className='rating-color' />
                                        <FontAwesomeIcon icon={faStar} className='rating-color' />
                                        <FontAwesomeIcon icon={faStar} className='rating-color' />
                                        <FontAwesomeIcon icon={faStar} className='rating-color' />
                                        <FontAwesomeIcon icon={faStar}/>
                                        <i>4.0 (25 Reviews)</i> 
                                    </div>

                                    <div className="d-flex mb-0">

                                        <p>
                                        <FontAwesomeIcon icon={faUserGroup} className='mx-2'/>
                                            {passengers}</p> 
                                        <p className="text-end flex-fill mx-2">{rate}</p> 

                                    </div>
                                    
                                 
                                </div>
                            </div>
    
                        </div>
        
        
        </>


    )


}