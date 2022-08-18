import { Link } from "react-router-dom";
import './/Intro.css'


const Intro = () => {
    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title"> Welcome to the Theme Park :-0</h3>
                    <div className="card-text">
                        <Link to="/tab2" className="btn"> Take me innn!!!! </Link>
                    </div>   
                </div>
            </div>
        </div>
    )
};

export default Intro;