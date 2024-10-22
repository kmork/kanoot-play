import { useEffect, useState } from 'react';
import './css/FrontPage.css';

function GamePage() {
    const [headerMessage, setHeaderMessage] = useState('Connecting to game...');
    const [subHeaderMessage, setSubHeaderMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/updates');

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.header) {
                setHeaderMessage(data.header);
            }
            if (data.subHeader) {
                setSubHeaderMessage(data.subHeader);
            } else {
                setSubHeaderMessage('');
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            setHeaderMessage('Game is disconnected');
            setSubHeaderMessage('');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className="front-page">
            <header className="header">
                <h1>{headerMessage}</h1>
            </header>
            <main className="main-content">
                {subHeaderMessage && <h2>{subHeaderMessage}</h2>}
            </main>
        </div>
    );
}

export default GamePage;