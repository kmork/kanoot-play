import { useState } from 'react';
import './css/FrontPage.css';
import Spinner from './Spinner';
import { usePlayer } from './PlayerContext.tsx';
import { useNavigate } from 'react-router-dom';

function NicknamePage() {
    const [nickname, setNickname] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { playerId, gamePin } = usePlayer();

    const handleNickname = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`/play/${gamePin}/player/${playerId}/nickname`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname }),
            });
            setLoading(false);
            if (response.ok) {
                navigate('/game');
            } else {
                setError('Failed to set nickname');
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
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="game-pin-input"
                    />
                    <button onClick={handleNickname} className="join-button" disabled={loading}>
                        {loading ? <Spinner /> : 'OK, go!'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default NicknamePage;