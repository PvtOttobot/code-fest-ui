import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Therapist} from "./pages/therapist/Therapist.tsx";
const About = () => <div>About Page</div>;

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/therapist" element={<Therapist />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App