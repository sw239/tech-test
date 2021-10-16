import React, { useState } from 'react'
import "./IT.css";
import { useHistory } from "react-router-dom";
import Event3 from '../pics/event3.jpg';

function Concert(){
	const [count, setCount]=useState(1)
	const [left, setLeft]=useState(6)

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
	const total=count*100
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
	<div class="left"><img class="event" alt="Concert" src={Event3} /></div>
	<div class="right">
	<h1 class="title">WelCome To My Concert</h1>
	<p class="etxt">The Concert will Start at xxth, OCT, 2021 at xx:xx. $100 for one ticket</p>
	<p class="etxt">Great Chance to meet your super star face to face！！！</p>
	<h1 class="title">{left} Ticket(s) Left only !!!!</h1>
	<p class="etxt">Please Choose how many ticket(s) you would like to purchase.</p>
	<button onClick={decrementCount}>-</button><span> {count} </span><button onClick={incrementCount}>+</button>
	<h1 class="title">Currently Paying ${total} Dollars</h1>
	<p class="etxt">Repost at bottom of this page to your personal social networking service and get 9% discount!!!!</p>
	<button onClick={Sub}>Submit</button>
	</div>
	<div class="clear"></div>
	</div>
	</>
	)
}
export default Concert


