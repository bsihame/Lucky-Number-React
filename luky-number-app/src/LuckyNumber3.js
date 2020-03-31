import React, { Component } from "react";

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

const handleSubmit = (e) => {
	e.prevent.default();
	getNum();
};

class NumPicker extends Component {
	render() {
		const num = getNum();

		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 7 ? "Congrats!" : "Unlucky!"}</p>
				{num === 7 && (
					<img src="https://i.chzbgr.com/full/6579709696/hD00EC412/" />
				)}
				<form>
					<button onSubmit={handleSubmit}>Try Your Luck !!</button>
				</form>
			</div>
		);
	}
}

export default NumPicker;
