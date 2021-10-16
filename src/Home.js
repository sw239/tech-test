import React, {Component} from "react";
import NavBar from './components/NavBar';
import Gridbox from './components/Gridbox';
import Title from './components/Title';
import Footer from './components/Footer';

class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Title txt="Flicket Events"/>				
                <Gridbox />
				<Footer />
            </>
        );
    }
}
export default Home;