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
		// let msg;
		// if (num === 3) {
		// 	msg = 
		// 		<div>
		// 			<h2>Congratulations!</h2>
		// 			<img src="https://media.tenor.com/images/aaea19470f096d10d30d41327b5a83a9/tenor.gif" className="lucky"/>
		// 		</div>
	
		// } else {
		// 	msg = 
		// 		<div>
		// 			<h2>Unlucky!</h2>
		// 			<img src="https://cdn.clipart.email/42007403f95fbbb915832994cbe8af85_28-collection-of-cats-clipart-gif-high-quality-free-cliparts-_320-336.gif" alt="unluckyPicture" className="badLuck"/>
		// 		</div>
		// }
		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
				{
					num === 7
						? <img src="https://i.chzbgr.com/full/6579709696/hD00EC412/"/>
						: <img src="https://i.pinimg.com/originals/fa/d0/98/fad098c27dda7bc19ed93a0b79105a70.gif"/>
				}
				<form>
					<button onSubmit={handleSubmit}>Try Your Luck !!</button>
        </form>
        {msg}
			</div>
		);
	}
}

export default NumPicker;
