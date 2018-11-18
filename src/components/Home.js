import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class Home extends Component {
    render(){
        return(
            <div>
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default Home;