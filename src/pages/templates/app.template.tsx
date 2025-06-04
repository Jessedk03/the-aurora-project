import {Outlet} from "react-router";
import {Navbar} from "react-bootstrap";
// import useMobileView from "../../hooks/useMobileView.ts";

function AppTemplate() {
    // const isMobile = useMobileView();


    return (
        <>
            <div>
                {/*    Navbar component*/}
                <Navbar />
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
}

export default AppTemplate;