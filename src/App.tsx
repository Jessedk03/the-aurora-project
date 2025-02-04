import '../public/css/index.css';
import {Route, Routes} from "react-router";
import Login from "./pages/auth/login.tsx";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Login/>}/>
        </Routes>
    );
}

export default App
