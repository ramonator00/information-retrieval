import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/css/paper-kit.css'
import App from './App';
import "./assets/scss/paper-kit.scss?v=1.3.0";
import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
