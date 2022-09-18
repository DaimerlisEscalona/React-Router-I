import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Navbar.css';
import pastel from "../../Img/pastel.png";
import home from "../../Img/home.png";
import comunicar from "../../Img/comunicar.png";

function CollapsibleExample() {
    return (

        <Navbar className="form-navbar">
            <Container className="justify-content-start form-">
                <div className='forma-cont-sec'>
                    <img className="form-img-navbar" src={home} alt="" />
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                </div>
                <div>
                    <img className="form-img-navbar" src={comunicar} alt="" />
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        Contacto
                    </Link>
                </div>
            </Container>
            <div className="form-cont-empresa">
                <Navbar.Brand className="text-white ms-3 text-decoration-none">Happy Cake</Navbar.Brand>
                <img className="form-img-navbar" src={pastel} alt="" />
            </div >
        </Navbar>
    );
}

export default CollapsibleExample;
