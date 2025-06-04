import '../../../../public/css/components.css'
import '../../../../public/css/login.css'

import {Col, Row} from "react-bootstrap";
import useMobileView from "../../../hooks/useMobileView.ts";
import {Flip, Slide, ToastContainer} from "react-toastify";
import {Outlet} from "react-router";

const images = [
    {src: "src/assets/images/scenic-background-light.jpg"},
    {src: "src/assets/images/scenic-background-dark.jpg"}
];

function LoginTemplate() {

    // const imageUrl = images[Math.floor(Math.random() * images.length)].src;

    const isMobile = useMobileView();

    return (
        <>
            {/*Top Bar Logo + Notification*/}
            <div className="position-absolute" style={{zIndex: 9999, width: "100%"}}>
                <Row className={"py-2 ps-3"}>
                    <Col xs={12} sm={12} md={8}>
                        <h4>Customer Login</h4>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        {isMobile ? (
                            <ToastContainer
                                position={"top-center"}
                                newestOnTop={true}
                                autoClose={4500}
                                hideProgressBar={true}
                                transition={Flip}
                            />
                        ) : (
                            <ToastContainer
                                position={"top-right"}
                                newestOnTop={true}
                                autoClose={4500}
                                hideProgressBar={true}
                                transition={Slide}
                            />
                        )}
                    </Col>
                </Row>
            </div>
            {/*Scenic Image*/}
            <div className="backgroundImage d-flex justify-content-center align-items-center"
                 style={{backgroundImage: `url(${images[0].src})`}}>

                {/*Content Container*/}
                <div className={`${isMobile ? "pt-4 pb-2 px-3 w-75" : "px-5 py-4 w-50"} loginContainer`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default LoginTemplate;