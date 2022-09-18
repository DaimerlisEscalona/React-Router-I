import { Container } from "react-bootstrap";
import torta from "../../Img/torta.png";
import './Home.css';

export default () => {
  return (
    <Container className="text-center form-cont-home">
      <h2 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h2>
      <h5> El lugar de los pasteles felices </h5>
      <div className="form-cont-img">
        <img className="form-img" src={torta} alt="home" />
      </div>
    </Container>
  );
};
