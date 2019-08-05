/**
 * Copyright (c) 2019
 * APP
 * 
 * @summary APP
 * @author  Fazil
 * 
 */

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import {Header} from './scripts/view/base/header';
import {Footer} from './scripts/view/base/footer';

import {Home} from './scripts/view/pages/home';
import {Dashboard} from './scripts/view/pages/dashboard';
import {Languages} from './scripts/constants/languages';
import {URL} from './scripts/constants/url';
import './styles/main.scss';

function App() {

  return (
	<div className="app-container">
		<Router>
			<Header />
			<Route path={URL.HOME} exact component={Home} />
			<Route path={URL.DASHBOARD}  component={Dashboard} />
			<Footer />
		</Router>
	</div>	
  	);
}

export default withTranslation(Languages.DEFAULT_NS)(App);
