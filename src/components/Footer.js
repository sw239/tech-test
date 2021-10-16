import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { ExternalLink } from 'react-external-link';
function Footer(){
	return(
	    <BottomNavigation>
		<ExternalLink href="https://www.facebook.com/login/">
		<BottomNavigationAction label="Facebook" style={{paddingTop:'10px'}} icon={<FacebookIcon style={{fill:"#3b5998"}}/>}/>
		</ExternalLink>
		<ExternalLink href="https://twitter.com/i/flow/signup">
		<BottomNavigationAction label="Twitter" style={{paddingTop:'10px'}} icon={<TwitterIcon style={{fill:"#1DA1F2"}}/>}/>
		</ExternalLink>
		<ExternalLink href="https://www.instagram.com/accounts/login/">
		<BottomNavigationAction label="Instagram" style={{paddingTop:'10px'}} icon={<InstagramIcon style={{fill:"#C13584"}}/>}/>
		</ExternalLink>
		<ExternalLink href="https://accounts.google.com/signin/v2/identifier?service=youtube&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
		<BottomNavigationAction label="YouTube" style={{paddingTop:'10px'}} icon={<YouTubeIcon style={{fill:"#c4302b"}}/>}/>
		</ExternalLink>
		</BottomNavigation>
	)
}

export default Footer