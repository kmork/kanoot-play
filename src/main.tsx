import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import {BrowserRouter} from "react-router-dom";
import {PlayerProvider} from "./PlayerContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <PlayerProvider>
              <App/>
          </PlayerProvider>
      </BrowserRouter>
  </StrictMode>,
)
