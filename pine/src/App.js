import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Homepage from "./components/Homepage.jsx"; 
import Article from "./components/Article.jsx"; 
import Trending from "./components/Trending.jsx"; 
import Profile from "./components/Profile.jsx"; 
import Saved from "./components/Saved.jsx"; 
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route exact path="/"
						element={<Homepage />} />
					<Route exact path="/article"
						element={<Article />} />
					<Route exact path="/trending"
						element={<Trending />} />
					<Route exact path="/profile"
						element={<Profile />} />
					<Route exact path="/saved"
						element={<Saved />} />
 				</Routes>
			</Router>
		</>
	);
}

export default App;