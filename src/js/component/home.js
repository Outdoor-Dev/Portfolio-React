import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<section>
				<img
					className="video"
					src="https://wallpaperaccess.com/full/17515.jpg"
				/>

				<img className="mountain" src="mountain.png" id="mountain" />
				<img className="lake" src="mountLeft.png" id="mountLeft" />
				<img
					className="mountRight"
					src="mountRight.png"
					id="mountRight"
				/>

				<div className="typewriter">
					<h2 id="text">Outdoor Dev</h2>
				</div>
			</section>

			<div className="typewriter d-flex justify-content-center">
				<h1>Always Creating</h1>
			</div>
			<div className="buttons d-flex justify-content-center ">
				<button className="btn first text-white mr-5">ABOUT</button>
				<button className="btn second text-white mr-5">
					PORTFOLIO
				</button>
				<button className="btn third text-white">CONTACT</button>
			</div>
		</>
	);
}
