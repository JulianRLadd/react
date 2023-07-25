import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm the `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem Ipsum dummy text. This is where I'll go into brief detail of
              who I am and such.Sed a suscipit augue, vel tincidunt dolor.
              Nullam gravida consequat ultrices. Cras vel libero ac quam rutrum
              luctus accumsan eu augue. In hac habitasse platea dictumst. Nunc a
              eros ut ante faucibus pulvinar. Mauris volutpat non tortor ac
              vehicula. Integer scelerisque orci a mi dignissim varius sed vitae
              dui. In in ipsum ut quam viverra porttitor. Phasellus nibh magna,
              mollis ut congue et, viverra ut velit.
            </p>
            <button onClick={() => console.log("connect")}>
              <p>
                Let's Connect <ArrowRightCircle size={25} />
              </p>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
