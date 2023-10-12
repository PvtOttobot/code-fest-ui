import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from './pages/auth/Auth.tsx';
import {Therapist} from "./pages/therapist/Therapist.tsx";
const About = () => <div>About Page</div>;

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/about" element={<About />} />
                <Route path="/therapist" element={<Therapist />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;