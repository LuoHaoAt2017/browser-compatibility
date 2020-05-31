import React from 'react';
import ReactDom from 'react-dom';
import App from './routes';
import '@/assets/css/reset.css';
import '@/assets/scss/common.scss';
import '@/utils/resize.js';
ReactDom.render(<App/>, document.getElementById('root'));
