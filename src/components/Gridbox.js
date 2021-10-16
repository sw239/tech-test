import React from 'react';
import E1 from '../pics/event1.jpg';
import E2 from '../pics/event2.jpg';
import E3 from '../pics/event3.jpg';
import E4 from '../pics/event4.jpg';
import E5 from '../pics/event5.jpg';
import A1 from '../pics/author1.jpg'
import A2 from '../pics/author2.jpg'
import A3 from '../pics/author3.jpg'
import A4 from '../pics/author4.jpg'
import A5 from '../pics/author5.jpg'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Link} from "react-router-dom";
const Styles = makeStyles((theme) =>({
	eventsContainer:{
		paddingTop: theme.spacing(3)
	},
	eventTitle:{
		fontWeight: 800,
		paddingBottom: theme.spacing(3)
	},
	card:{
		maxWidth:"100%",
	},
	media:{
		height:240
	},
	cardActions:{
		display:"flex",
		margin:"0 10px",
		justifyContent:"space-between"
	},
	author:{
		display:"flex"
	}
}));
function Gridbox(props){
	const classes=Styles();
	return(
	<div>
	<Container maxWidth="lg" className={classes.eventsContainer}>
	<Typography variant="h4" className={classes.eventTitle}>Enjoy visiting our up coming events</Typography>
	<Grid container spacing={3}>
	<Grid item xs={12} sm={6} md={4}>
	<Card className={classes.card}>
	<CardActionArea>
	<CardMedia className={classes.media} 
	  image={E1}
	  title="party"
	/>
	<CardContent>
	<Typography gutterBottom variant="h5" component="h2">
	Party</Typography>
	<Typography variant="body2" color="textSecondary" component="p">
	Welcome to my personal 18th birthday party here, hope we can have a great day</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions className={classes.cardActions}>
	<Box className={classes.author}>
	<Avatar src={A1}/>
	<Box ml={2}>
	<Typography variant="subtitle2" component="p">
	Liliana Veil</Typography>
	<Typography variant="subtitle2" color="textSecondary" component="p">
	Oct 25th, 2021</Typography>
	</Box>
	</Box>
	<Box> <BookmarkBorderIcon /> </Box>
	</CardActions>
	<CardActions className={classes.cardActions}>
	<Link to={'/Event1'}>
	<Button size="small" color="primary">Learn More</Button></Link>
	</CardActions>
	</Card>
	</Grid>
	<Grid item xs={12} sm={6} md={4}>
	<Card className={classes.card}>
	<CardActionArea>
	<CardMedia className={classes.media} 
	  image={E2}
	  title="Rugby"
	/>
	<CardContent>
	<Typography gutterBottom variant="h5" component="h2">
	Rugby Game</Typography>
	<Typography variant="body2" color="textSecondary" component="p">
	Come to Enjoy our exciting rugby game and Cheer for our ALL Blacks</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions className={classes.cardActions}>
	<Box className={classes.author}>
	<Avatar src={A2}/>
	<Box ml={2}>
	<Typography variant="subtitle2" component="p">
	NZ All Blacks</Typography>
	<Typography variant="subtitle2" color="textSecondary" component="p">
	Oct 26th, 2021</Typography>
	</Box>
	</Box>
	<Box> <BookmarkBorderIcon /> </Box>
	</CardActions>
	<CardActions className={classes.cardActions}>
	<Link to={'/Event2'}>
	<Button size="small" color="primary">Learn More</Button></Link>
	</CardActions>
	</Card>
	</Grid>
	<Grid item xs={12} sm={6} md={4}>
	<Card className={classes.card}>
	<CardActionArea>
	<CardMedia className={classes.media} 
	  image={E3}
	  title="Concert"
	/>
	<CardContent>
	<Typography gutterBottom variant="h5" component="h2">
	Concert</Typography>
	<Typography variant="body2" color="textSecondary" component="p">
	Welcome to my personal Concert, and let us enjoy together</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions className={classes.cardActions}>
	<Box className={classes.author}>
	<Avatar src={A3}/>
	<Box ml={2}>
	<Typography variant="subtitle2" component="p">
	Tylor S</Typography>
	<Typography variant="subtitle2" color="textSecondary" component="p">
	Oct 27th, 2021</Typography>
	</Box>
	</Box>
	<Box> <BookmarkBorderIcon /> </Box>
	</CardActions>
	<CardActions className={classes.cardActions}>
	<Link to={'/Event3'}>
	<Button size="small" color="primary">Learn More</Button></Link>
	</CardActions>
	</Card>
	</Grid>
	<Grid item xs={12} sm={6} md={4}>
	<Card className={classes.card}>
	<CardActionArea>
	<CardMedia className={classes.media} 
	  image={E4}
	  title="Museum"
	/>
	<CardContent>
	<Typography gutterBottom variant="h5" component="h2">
	Museum</Typography>
	<Typography variant="body2" color="textSecondary" component="p">
	Welcome to this historical museum and learn about the history of the Renaissance</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions className={classes.cardActions}>
	<Box className={classes.author}>
	<Avatar src={A4}/>
	<Box ml={2}>
	<Typography variant="subtitle2" component="p">
	Dr Steven J</Typography>
	<Typography variant="subtitle2" color="textSecondary" component="p">
	Oct 28th, 2021</Typography>
	</Box>
	</Box>
	<Box> <BookmarkBorderIcon /> </Box>
	</CardActions>
	<CardActions className={classes.cardActions}>
	<Link to={'/Event4'}>
	<Button size="small" color="primary">Learn More</Button></Link>
	</CardActions>
	</Card>
	</Grid>
	<Grid item xs={12} sm={6} md={4}>
	<Card className={classes.card}>
	<CardActionArea>
	<CardMedia className={classes.media} 
	  image={E5}
	  title="Aquarium"
	/>
	<CardContent>
	<Typography gutterBottom variant="h5" component="h2">
	Aquarium</Typography>
	<Typography variant="body2" color="textSecondary" component="p">
	We sincerely invite you to attend the opening ceremony of our aquarium</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions className={classes.cardActions}>
	<Box className={classes.author}>
	<Avatar src={A5}/>
	<Box ml={2}>
	<Typography variant="subtitle2" component="p">
	Donald T</Typography>
	<Typography variant="subtitle2" color="textSecondary" component="p">
	Oct 29th, 2021</Typography>
	</Box>
	</Box>
	<Box> <BookmarkBorderIcon /> </Box>
	</CardActions>
	<CardActions className={classes.cardActions}>
	<Link to={'/Event5'}>
	<Button size="small" color="primary">Learn More</Button></Link>
	</CardActions>
	</Card>
	</Grid>
	</Grid>
	</Container>
	</div>
	)
}

export default Gridbox