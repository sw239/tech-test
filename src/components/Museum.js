import React, { useState } from 'react'
import "./IT.css";
import { useHistory } from "react-router-dom";
import Event4 from '../pics/event4.jpg';

function Museum(){
	const [count, setCount]=useState(1)
	const [left, setLeft]=useState(99)

	sessionStorage.setItem("key", 1)
	function decrementCount(){
		if(count>0){
		setCount(prevCount=>prevCount-1)
		setLeft(prevCount=>prevCount+1)
		}
		else{alert('You already choosed 0 ticket')}
	}
	function incrementCount(){
		if(left>0){
		setCount(prevCount=>prevCount+1)
		setLeft(prevCount=>prevCount-1)
		}
		else{alert('You already choosed all the tickets we currently have')}
	}
	const total=count*10
	let history = useHistory();	
	function Sub() {
	if(count>0){
    history.goBack();
	alert('Thanks for purchasing '+count+' ticket(s) from us')
	}
	else{
		alert('Please choose how many tickets you want')
	}
    }
	return(
	<>
	<div class="main">
	<div class="right"><img class="event" alt="Museum" src={Event4} /></div>
	<div class="left">
	<h1 class="title">WelCome To Our historical Museum</h1>
	<p class="etxt">Museum will Open at xxth, OCT, 2021 at xx:xx. $10 for one ticket</p>
	<p class="etxt">Great Chance to learn about the history of the Renaissance</p>
	<h1 class="title">{left} Ticket(s) Left only !!!!</h1>
	<p class="etxt">Please Choose how many ticket(s) you would like to purchase.</p>
	<button onClick={decrementCount}>-</button><span> {count} </span><button onClick={incrementCount}>+</button>
	<h1 class="title">Currently Paying ${total} Dollars</h1>
	<p class="etxt">Repost at bottom of this page to your personal social networking service and get 20% discount!!!!</p>
	<button onClick={Sub}>Submit</button>
	</div>
	<div class="clear"></div>
	</div>
	</>
	)
}
export default Museum


