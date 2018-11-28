import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

class Home extends Component {

    state = {
        openSide: null
    }


    render(){
        return(
            <div>
                {this.state.openSide ? <Sidebar /> : null}
                {/* <ul id="slide-out" class="sidenav">
                    <li><a class="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
                </ul> */}
                <a href="#" data-target="slide-out" className="sidenav-trigger" onClick={this.openSideBar}><i class="material-icons">menu</i></a>
            </div>
        );
    }

    openSideBar = () => {
        this.setState({
            openSide: true
        })
    }
}

export default Home;