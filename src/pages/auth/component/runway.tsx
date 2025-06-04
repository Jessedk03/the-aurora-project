import {useAuth} from "../../../hooks/auth/useAuth.ts";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import useMobileView from "../../../hooks/useMobileView.ts";
import ArrowRight from "../../../assets/icons/arrow-right.tsx";

function Runway() {

    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const isMobile = useMobileView();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <Row className={"pb-1 border-bottom"}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h2>Welcome {user?.username}!</h2>
                </Col>
            </Row>
            <Row className={"mb-3"}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <p className={"text-muted fst-italic"} style={{ fontSize: 12 }}>
                        Quickly navigate to your most used module!
                    </p>
                </Col>
            </Row>

            <Row>
            {/*TODO: Create cards of modules that are most used by the user.*/}
            </Row>

            <Row className={"pt-2"}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}
                     className={`d-flex ${isMobile ? "justify-content-start pt-3" : "justify-content-end"} align-items-center`}>
                    <button className={`${isMobile ? "w-100" : "px-3"} py-1 submitButton`}
                            onClick={() => (navigate("/dashboard"))}>
                        Dashboard <ArrowRight size={18} />
                    </button>
                </Col>
            </Row>
        </>
    )
}

export default Runway;