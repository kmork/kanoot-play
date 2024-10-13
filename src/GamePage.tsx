import { useState } from 'react';
import './css/FrontPage.css';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

function GamePage() {
    const [gamePin, setGamePin] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleJoinGame = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://api.example.com/join-game?pin=${gamePin}`);
            const data = await response.json();
            setLoading(false);
            if (data.success) {
                navigate('/game');
            } else {
                setError('Invalid PIN. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="front-page">
            <header className="header">
                <h1>Kanoot!</h1>
            </header>
            <main className="main-content">
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="Nickname"
                        value={gamePin}
                        onChange={(e) => setGamePin(e.target.value)}
                        className="game-pin-input"
                    />
                    <button onClick={handleJoinGame} className="join-button" disabled={loading}>
                        {loading ? <Spinner /> : 'OK, go!'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default GamePage;