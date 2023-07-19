import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import App from "./components/App";

import './styles/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
    <HashRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HashRouter>
)