import { useState } from 'react';
import './FrontPage.css';

function FrontPage() {
    const [gamePin, setGamePin] = useState('');

    const handleJoinGame = () => {
        // Handle the logic to join the game with the entered PIN
        console.log(`Joining game with PIN: ${gamePin}`);
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
                    <button onClick={handleJoinGame} className="join-button">
                        Enter
                    </button>
                </div>
            </main>
        </div>
    );
}

export default FrontPage;