import { createContext, useContext, useState, ReactNode } from 'react';

interface PlayerContextType {
    playerId: string;
    setPlayerId: (id: string) => void;
    gamePin: string;
    setGamePin: (pin: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [playerId, setPlayerId] = useState('');
    const [gamePin, setGamePin] = useState('');

    return (
        <PlayerContext.Provider value={{ playerId, setPlayerId, gamePin, setGamePin }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};