import React, { Component } from 'react';
import '../assets/css/sidebar.css';
import 'materialize-css';


const stars = require('../assets/images/stars.jpeg');
const saleh = require('../assets/images/saleh.jpeg');

class Sidebar extends Component {

    render(){
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed grey darken-4">
                    <div>
                        <li>
                            <div className="user-view">
                                <div className="background">
                                    <img src={stars} />
                                </div>
                                <a><img className="circle" src={saleh} /></a>
                                <a><span className="white-text name">Saleh Nazih</span></a>
                                <a><span className="white-text email">saleh.nazih.dev@gmail.com</span></a>
                            </div>
                        </li>
                        <li><a href="#!"><span className="nav-font">Quem sou eu?</span></a></li>
                        <li><a href="#!"><span className="nav-font">Formação Acadêmica</span></a></li>
                        <li><a href="#!"><span className="nav-font">Experiência</span></a></li>
                        <li><a href="#!"><span className="nav-font">Projetos</span></a></li>
                        <li><a href="#!"><span className="nav-font">Conhecimentos</span></a></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Sidebar;