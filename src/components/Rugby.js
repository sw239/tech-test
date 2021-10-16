import React, { useState } from 'react'
import "./IT.css";
import { useHistory } from "react-router-dom";
import Event2 from '../pics/event2.jpg';

function Rugby(){
	const [count, setCount]=useState(1)
	const [left, setLeft]=useState(77)

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
	const total=count*50
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
	<div class="right"><img class="event" alt="Rugby Game" src={Event2} /></div>
	<div class="left">
	<h1 class="title">Come to Enjoy our exciting games</h1>
	<p class="etxt">This Game will Start at xxth, OCT, 2021 at xx:xx. $50 for one ticket</p>
	<p class="etxt">Great Chance to closely meet the Rugby Super star you like</p>
	<h1 class="title">{left} Ticket(s) Left only !!!!</h1>
	<p class="etxt">Please Choose how many ticket(s) you would like to purchase.</p>
	<button onClick={decrementCount}>-</button><span> {count} </span><button onClick={incrementCount}>+</button>
	<h1 class="title">Currently Paying ${total} Dollars</h1>
	<p class="etxt">Repost at bottom of this page to your personal social networking service and get 10% discount!!!!</p>
	<button onClick={Sub}>Submit</button>
	</div>
	<div class="clear"></div>
	</div>
	</>
	)
}
export default Rugby


