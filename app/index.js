import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

const opts = {
  title: 'React',
  items: [
    { key: 'react',      name: 'React' },
    { key: 'webpack',    name: 'Webpack' },
    { key: 'hot-loader', name: 'Hot Loader' },
    { key: 'stateless',  name: 'Stateless Components' },
  ],
};

ReactDOM.render(<App {...opts} />, root);
