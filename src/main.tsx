import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>,
)
