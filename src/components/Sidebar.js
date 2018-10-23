import React, { Component } from 'react';
import 'materialize-css';


class Sidebar extends Component {

    render(){
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><a href="#!">First Sidebar Link</a></li>
                    <li><a href="#!">Second Sidebar Link</a></li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }
}

export default Sidebar;