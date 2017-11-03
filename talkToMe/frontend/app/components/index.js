import React from "react";
import {render} from "react-dom";
import MainComponent from "./Main.js";
import {Jumbotron, Button} from "react-bootstrap";
import {Provider} from 'react-redux';
import store from './store.js';

const app = document.getElementById('app');

render(
<Provider store={store}>
 	<MainComponent /> 
</Provider>, app);