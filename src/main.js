import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes/index';
import '@/assets/css/reset.css';
import '@/assets/scss/common.scss';
import '@/utils/resize.js';
ReactDom.render(<Routes/>, document.getElementById('root'));
