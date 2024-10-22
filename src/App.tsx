import './css/App.css'
import FrontPage from "./FrontPage.tsx";
import GamePage from "./GamePage.tsx";
import { Routes, Route } from 'react-router-dom';
import NicknamePage from "./NicknamePage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/nickname" element={<NicknamePage />} />
            <Route path="/game" element={<GamePage />} />
        </Routes>
    );
}

export default App
