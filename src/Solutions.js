import React, {Component} from "react";
import NavBar from './components/NavBar';
import Title from './components/Title';
import Footer from './components/Footer';
import ImageText from './components/ImageText';
class Solutions extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Title txt="SOLUTIONS"/>	
                <ImageText />				
				<Footer />
			</>
        );
    }
}
export default Solutions;