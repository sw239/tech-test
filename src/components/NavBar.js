import React from 'react'
import logo from '../pics/flicket.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from "react-router-dom";
import "./IT.css";
const styles =  makeStyles((theme) =>({
	bar:{
		paddingTop:"1.15rem",
		backgroundColor:"#4A4A49",
		[theme.breakpoints.down("sm")]:{
			height:300,
			fontSize:"1em"
		}
	},
	logo:{
		width:"4%",
		[theme.breakpoints.down("sm")]:{
			height:300,
			fontSize:"1em"
		}
	},
	menuItem:{
		cursor:"pointer",
		paddingLeft:100,
		flexGrow:1,
		"&:hover":{
			color:"#ffffff"
		},
		[theme.breakpoints.down("sm")]:{
			height:300,
			fontSize:"1em"
		}
	}
}))
function NavBar(){
	const classes=styles()
	
	return(
	    <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
		<img src={logo} alt="copy logo" className={classes.logo}/>
		<Typography variant="h6" className={classes.menuItem}>
		<Link to={'/Home'}>HOME</Link>
		</Typography>
		<Typography variant="h6" className={classes.menuItem}>
		<Link to={'/About'}>ABOUT</Link>
		</Typography>
		<Typography variant="h6" className={classes.menuItem}>
		<Link to={'/Solutions'}>SOLUTIONS</Link>
		</Typography>
		<Typography variant="h6" className={classes.menuItem}>
		<Link to={'/Contact'}>Contact</Link>
		</Typography>
		</Toolbar>
	)
}

export default NavBar