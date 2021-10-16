import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

const Styles = makeStyles((theme) =>({
	appBar:{
		backgroundColor:"#fff"
	},
	post:{
		backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
	    height:"500px",
		backgroundPosition:"center",
		backgroundRepeat:"no-repeat",
		backgroundSize:"cover",
		position:"relative",
		display:"flex",
		justifyContent:"center",
		color:"#fff",
		fontSize:"4rem",
		[theme.breakpoints.down("sm")]:{
			height:300,
			fontSize:"3em"
		}
	}
}));

function Title(props){
const classes=Styles();
	return(
	   <div>
	   <AppBar className={classes.appBar} position="static">
	   </AppBar>
	   <Box className={classes.post}>
	   <Box>{props.txt}</Box>
	   </Box>
	   </div>
	)
}
export default Title