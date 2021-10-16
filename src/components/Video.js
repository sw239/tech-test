import React from "react";
import VideoPlayer from 'react-video-js-player';
import Game from '../pics/sample.mp4';
import Dragon from '../pics/dragon.jpg';
import "./Video.css";
const Video=()=>{
	const video=Game;
	const poster=Dragon;
	return(
	<div>
	<h1 style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "30px", color:"orange"}}>ABOUT US.</h1>
	<p style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "20px", color:"orange"}}>
	Flicket is proudly New Zealand owned and operated and our core focus is on our partners and their fans. Flicket was founded in response to a gap in the market where traditional ticketing firms have historically retained control of the consumer experience and associated data and have commercialised these key assets for their own benefit. Some of these ticketing firms have enjoyed a monopoly in the industry resulting in a loss of customer focus.
	</p>
	<h1 style={{textAlign: "center"}}>Video Introductions(random drama)</h1>
	 <VideoPlayer src={video} poster={poster} 
	 
	 width="720" height="420" 
	 playbackRates={[0.5, 1, 1.5, 2, 3]}
	 />
	</div>
	)
}

export default Video