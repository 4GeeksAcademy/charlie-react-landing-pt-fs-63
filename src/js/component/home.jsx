import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar"
import Card from "./card"
import cardData from "../cardData"
import Footer from "./footer"

//create your first component
const Home = () => {
	return (
		<div className="vh-100">
			<Navbar />
			<Jumbotron />
			<div className="row mx-xl-2 mx-sm-0">
				{cardData.map(card => (
					<Card key={cardData.id} cardData={card} />
				))}
			</div>	
			<Footer />
		</div>
	);
};

export default Home;
