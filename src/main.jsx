import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store';
import './style.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
