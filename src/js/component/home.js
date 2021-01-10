import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [offset, setOffSet] = useState();
	const handleScroll = () => setOffSet(window.pageYOffset);
	window.addEventListener("scroll", handleScroll);

	return (
		<>
			<section>
				<img
					className="video"
					src="https://wallpaperaccess.com/full/17515.jpg"
				/>

				<img className="mountain" src="mountain.png" id="mountain" />
				<img
					className="mountLeft"
					src="frontMount.jpg"
					id="mountLeft"
					style={{ width: 100 + offset * 0.3 + "%" }}
				/>
				<img
					className="mountRight"
					src="mountRight.png"
					id="mountReft"
					style={{ width: 100 + offset * 0.3 + "%" }}
				/>
				<div className="typewriter">
					<h2 id="text">Outdoor Dev</h2>
				</div>
			</section>

			<div className="content">
				<h1> Always Creating</h1>
			</div>
		</>
	);
}
