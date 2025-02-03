import '../../../public/css/login.css'
import {Col, Row} from "react-bootstrap";

function Login() {
    const scenicImage = "src/assets/images/mountains-7292778_1280.jpg";

    return (
        <>
            <div className="backgroundImage d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${scenicImage})` }}>
                <div className="p-5 loginContainer innerContainer">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2>Login</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <label htmlFor="email">Email: </label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <input id={"email"} type="email" placeholder="name@example.com" />
                        </Col>
                    </Row>
                    <Row className={"py-2"}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <label htmlFor="password">Password: </label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <input id={"password"} type="password" />
                        </Col>
                    </Row>
                    <Row className={"py-2 flex-row-reverse"}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>

                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <button type="submit"> login </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Login;