import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Homepage from "./components/Homepage.jsx"; 
import Article from "./components/Article.jsx"; 
import ScrollToTop from './components/ScrollToTop';


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
 				</Routes>
			</Router>
		</>
	);
}

export default App;