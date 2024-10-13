import { useState } from 'react';
import './css/FrontPage.css';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from './PlayerContext';

function FrontPage() {
    const [gamePinInput, setGamePinInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setPlayerId, setGamePin } = usePlayer();

    const handleJoinGame = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`/play/${gamePinInput}/joinGame`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: gamePinInput }),
            });
            setLoading(false);
            if (response.ok) {
                const data = await response.json();
                setPlayerId(data.playerId); // Store playerId in context
                setGamePin(gamePinInput); // Store gamePin in context
                navigate('/nickname');
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
                        value={gamePinInput}
                        onChange={(e) => setGamePinInput(e.target.value)}
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