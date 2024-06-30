import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
export default function page2(props){

return(
    <div className="col-12 col-md-6 col-xl-4">
        <div className="card border-0 vehiclesCard">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <b>{props.left}</b>
                <p className="card-text">{props.right}</p>
            </div>
        </div>
    </div>
)

}
