import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Apresentation from '../components/Apresentation';
import Footer from '../components/Footer';

class Home extends Component {

    render(){
        return(
            <div>
                <Sidebar />
                <Apresentation />
                <Footer />
            </div>
        );
    }

}

export default Home;