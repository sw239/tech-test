import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
	wrapper:{
		display:"flex",
		flexDirection:"row",
		padding: "0 9rem 0 9rem",
        justifyContent:"center",
        alignItems:"center"
		
	},
	item:{
		paddingTop:"1rem"
	},
	
})
function Eventgrid(props){
	const{icon} = props;
	const classes = styles()
	return (
	    <div className={classes.wrapper}>
	    <div className={classes.item}>{icon}</div>
		<Typography className={classes.item} variant="h5"></Typography>
		
		</div>
	)
}

export default Eventgrid