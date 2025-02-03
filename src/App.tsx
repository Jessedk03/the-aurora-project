import {Col, Container, Row} from "react-bootstrap";
import '../public/css/index.css';

function App() {

  return (
    <>
      <Row className={"w-100 h-100"}>
          {/*Header*/}
          <Row className={"border-bottom"}>
              <Col md={1} className={"ps-4 border-end"}> hallo</Col>
              <Col md={11}> hier komt een hoop tekst voor de header</Col>
          </Row>
          {/*Container*/}
          <Row className={"h-100"}>
              <Col md={1} className={"ps-4 border-end"}>ja ja</Col>
              <Col md={11} className={"backgroundColor"}>
                  <Container className={"h-100 py-2"}>
                      hier moet dan content komen
                  </Container>
              </Col>
          </Row>
      </Row>
    </>
  )
}

export default App
