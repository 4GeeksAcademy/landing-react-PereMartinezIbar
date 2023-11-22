import React from "react";
import Navbar from "./navbar"
import Header from "./header"
import Card from "./card"
import Footer from "./footer"

const Home = () => {

	return (
		
		<div className="text-center">
			<Navbar/>
			<Header/>
			<div className="d-flex">
             <Card/>
			 <Card/>
			 <Card/>
			 <Card/>
			</div>
			<Footer/>
		</div>
		
	);
};

export default Home;
