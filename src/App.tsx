import './App.css'
import FrontPage from "./FrontPage.tsx";
import { Routes, Route } from 'react-router-dom';
import GamePage from "./GamePage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/game" element={<GamePage />} />
        </Routes>
    );
}

export default App
