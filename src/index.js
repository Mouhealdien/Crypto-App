import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css'
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router>
    <Provider store={store}>
            <App />
    </Provider>
</Router>);
