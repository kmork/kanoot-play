import { useState } from 'react';
import './css/FrontPage.css';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

function FrontPage() {
    const [gamePin, setGamePin] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleJoinGame = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`/play/${gamePin}/joinGame`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: gamePin }),
            });
            setLoading(false);
            if (response.ok) {
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
                        placeholder="Game PIN"
                        value={gamePin}
                        onChange={(e) => setGamePin(e.target.value)}
                        className="game-pin-input"
                    />
                    <button onClick={handleJoinGame} className="join-button" disabled={loading}>
                        {loading ? <Spinner /> : 'Enter'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default FrontPage;