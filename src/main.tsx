import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/auth/login.tsx";
// import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
