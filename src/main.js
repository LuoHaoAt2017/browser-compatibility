import React from 'react';
import ReactDom from 'react-dom';
import '@/utils/resize.js';
import App from './App.js';
import '@/assets/css/reset.css';
import '@/assets/scss/common.scss';
import 'antd/dist/antd.css';

ReactDom.render(<App/>, document.getElementById('root'));
