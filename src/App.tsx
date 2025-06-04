import '../public/css/index.css';
import {Navigate, Route, Routes} from "react-router";
import LoginTemplate from "./pages/auth/template/login.template.tsx";
import Runway from "./pages/auth/component/runway.tsx";
import Login from "./pages/auth/component/login.tsx";
import Dashboard from "./pages/dashboard.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<LoginTemplate />}>
                <Route index element={<Login/>}/>
                <Route path="runway" element={<Runway />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App
