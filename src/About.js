import React, {Component} from "react";
import NavBar from './components/NavBar';
import Video from './components/Video';
import Title from './components/Title';
import Footer from './components/Footer';
class About extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Title txt="About us"/>				
                <Video />
				<Footer />
			</>
        );
    }
}
export default About;