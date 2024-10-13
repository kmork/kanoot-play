import './css/App.css'
import FrontPage from "./FrontPage.tsx";
import { Routes, Route } from 'react-router-dom';
import NicknamePage from "./NicknamePage.tsx";
import WaitingForGameStartPage from "./WaitingForGameStartPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/nickname" element={<NicknamePage />} />
            <Route path="/waiting" element={<WaitingForGameStartPage />} />
        </Routes>
    );
}

export default App
