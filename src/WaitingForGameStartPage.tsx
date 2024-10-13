import './css/FrontPage.css';
import { usePlayer } from './PlayerContext';

function WaitingForGameStartPage() {
    const { playerId, gamePin } = usePlayer();

    return (
        <div className="front-page">
            <header className="header">
                <h1>You're in!</h1>
            </header>
            <main className="main-content">
                <h2>See your nickname on screen?</h2>
            </main>
        </div>
    );
}

export default WaitingForGameStartPage;