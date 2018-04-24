import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './components/Main';
import './styles/styles.scss';

render(<Main />, document.getElementById('app'));