//App.js
import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
import {BrowserRouter as Router,Routes,Route,
  } from "react-router-dom";
import Invoice from "./pages/Invoice"
import Order from "./pages/Order"
import Home from "./pages/Home"

function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
				    <Route path='/' element={<Home />}/>
					<Route path='/Invoice' element={<Invoice />}/>
					<Route path='/Order' element={<Order />}/>
					
				</Routes>
			</Router>

		</div>
	);
}
export default App;