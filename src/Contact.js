import React, {Component} from "react";
import NavBar from './components/NavBar';
import Title from './components/Title';
import Footer from './components/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Title txt="LET'S TALK"/>	
				<h1 style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "30px", color:"orange"}}>
				Flicket is proudly New Zealand owned and operated and our core focus is on our partners and their fans. If you have an enquiry about a particular event, need technical support, or are interested in partnering with us, feel free to do so.
				</h1>
				<p style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "30px"}}>
				Email: xxx@flicket.co.nz
				</p>
				<p style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "30px"}}>
				Phone: xx-xxxxxxx
				</p>
				<p style={{textAlign: "left", paddingLeft:"25%", paddingRight:"25%",fontSize: "30px", color:"orange"}}>
				We are always glad to hear from you. 
				</p>
				<Footer />
			</>
        );
    }
}
export default Contact;