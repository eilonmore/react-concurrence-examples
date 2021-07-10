import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Navigation from "./navigation/Navigation";

const theme = createTheme({
	palette: {
		primary: {
			main: '#4a36d6',
		},
		secondary: {
			main: '#ffffff',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={theme}>
		<Navigation/>
	</ThemeProvider>
);
