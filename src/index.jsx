import { createRoot } from 'react-dom/client'
import TranslateApp from './TranslateApp.jsx';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <TranslateApp />
)
