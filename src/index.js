import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import { reducer, initialState} from "./reducers/reducer";
import { createStore } from "redux";
import './sass/index.scss';
import App from './App';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
