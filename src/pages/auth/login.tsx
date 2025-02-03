import '../../../public/css/login.css'
import '../../../public/css/components.css'
import {Col, Row} from "react-bootstrap";
import useIsMobileView from "../../hooks/isMobile.ts";

const images = [
    {src: "src/assets/images/scenic-background-light.jpg"},
    {src: "src/assets/images/scenic-background-dark.jpg"}
];

function Login() {

    const imageUrl = images[Math.floor(Math.random() * images.length)].src;

    const isMobile = useIsMobileView();
    return (
        <>
            {/*Scenic Image*/}
            <div className="backgroundImage d-flex justify-content-center align-items-center"
                 style={{backgroundImage: `url(${imageUrl})`}}>

                {/*Login Container*/}
                <div className={`${isMobile ? "py-5 px-3 w-75" : "p-5 w-50"} loginContainer`}>
                    <Row className={"pb-1 border-bottom mb-3"}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2>Login</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className={"d-flex align-items-center"}>
                            <label htmlFor="email">Email: </label>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <input className={"w-100 px-1"} id={"email"}
                                   style={{
                                       borderRadius: `4px`,
                                       borderWidth: `1px`,
                                       borderStyle: `solid`,
                                       borderColor: `var(--mc-gray)`
                                   }} type="email"
                                   placeholder="name@example.com"/>
                        </Col>
                    </Row>
                    <Row className={"py-2"}>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className={"d-flex align-items-center"}>
                            <label htmlFor="password">Password: </label>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <input className={"w-100 px-1"} id={"password"} style={{
                                borderRadius: `4px`,
                                borderWidth: `1px`,
                                borderStyle: `solid`,
                                borderColor: `var(--mc-gray)`
                            }} type="password"/>
                        </Col>
                    </Row>
                    <Row className={"py-2"}>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className={"d-flex align-items-center"}>
                            <small className={"fst-italic text-muted"}>
                                Trouble signing in? <a href="" className={"routingAnchor"}>click here.</a>
                            </small>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className={"d-flex justify-content-end align-items-center"}>
                            <button className={"px-3 py-1 submitButton"} type="submit"> login
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Login;