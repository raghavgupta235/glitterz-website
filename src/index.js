import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/icofont/icofont.min.css'
import './vendor/boxicons/css/boxicons.min.css'
import './vendor/venobox/venobox.css'
import './vendor/owl.carousel/assets/owl.carousel.min.css'
import './vendor/aos/aos.css'
import './css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
