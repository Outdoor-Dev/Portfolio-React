import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [offset, setOffSet] = useState();
	const handleScroll = () => setOffSet(window.pageYOffset);
	window.addEventListener("scroll", handleScroll);

	return (
		<>
			<div className="App">
				<div className="zoom">
					<img
						src="leftside.png"
						alt=""
						id="leftside"
						style={{ width: 100 + offset * 0.3 + "%" }}
					/>
					<img
						src="rightside.png"
						alt=""
						id="rightside"
						style={{ width: 100 + offset * 0.3 + "%" }}
					/>
					<hi
						className="text"
						style={{ top: `-${100 + offset * 0.3 + "%"} ` }}>
						{" "}
						OUTDOOR DEV
					</hi>
				</div>
				<div className="content">
					<h2>Always Creating</h2>
				</div>
			</div>
		</>
	);
}
