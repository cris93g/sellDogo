import React from "react";
import "./Cards.scss";
const Cards = ({ dog, AddDog }) => (
	<div className="card">
		<div key={dog.id} />
		<h3>{AddDog.name}</h3>
		<p>{dog.sex}</p>
		<p>{dog.age}</p>
		<img src={dog.picture} />
	</div>
);

export default Cards;
