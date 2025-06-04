import '../../../../public/css/components.css'
import '../../../../public/css/login.css'
import {Col, Row} from "react-bootstrap";
import useMobileView from "../../../hooks/useMobileView.ts";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {postLogin} from "../../../config/api/auth/login.ts";
import {useNavigate} from "react-router";
import {useAuth} from "../../../hooks/auth/useAuth.ts";

function Login() {

    // const imageUrl = images[Math.floor(Math.random() * images.length)].src;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);
    const isMobile = useMobileView();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const {login} = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (email == null && password == null || email == "" && password == "") {
            setError("Please enter a valid email and password");
            return;
        }

        if (email == null || email == "") {
            setError("Please enter a valid email");
            return;
        }

        if (password == null || password == "") {
            setError("Please enter a password");
            return;
        }
        setLoading(true);

        toast.warning("Logging in...");

        const success = await postLogin(email, password, false, login);
        if (!success) {
            setError("Login failed")
            setLoading(false);
            return;
        } else {
            toast.success("Login successfull");
            navigate("runway");
        }

    }

    return (
        <>
            {/*Login Container*/}
            <Row className={"pb-1 border-bottom mb-3"}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h2>Login</h2>
                </Col>
            </Row>
            <form onSubmit={handleLogin}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={6} xl={6} className={"d-flex align-items-center"}>
                        <label htmlFor="usernameOrEmail">Email: </label>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                        <input className={"w-100 px-1 inputField"} id={"usernameOrEmail"} type="usernameOrEmail"
                               placeholder="name@example.com"
                               onChange={(e) => setEmail(e.target.value)}
                               disabled={loading}
                        />
                    </Col>
                </Row>
                <Row className={"py-2"}>
                    <Col xs={12} sm={12} md={4} lg={6} xl={6} className={"d-flex align-items-center"}>
                        <label htmlFor="password">Password: </label>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                        <input className={"w-100 px-1 inputField"} id={"password"} type="password"
                               onChange={(e) => setPassword(e.target.value)}
                               disabled={loading}
                        />
                    </Col>
                </Row>
                <Row className={"pt-2"}>
                    <Col xs={12} sm={8} md={6} lg={6} xl={6} className={"d-flex align-items-center"}>
                        <small className={"fst-italic text-muted text-nowrap"}>
                            Trouble signing in? <a href="" className={"routingAnchor"}>click here.</a>
                        </small>
                    </Col>
                    <Col xs={12} sm={4} md={6} lg={6} xl={6}
                         className={`d-flex ${isMobile ? "justify-content-start pt-3" : "justify-content-end"} align-items-center`}>
                        <button className={`${isMobile ? "w-100" : "px-3"} py-1 submitButton`}
                                disabled={loading}
                                type="submit"> login
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
}

export default Login;