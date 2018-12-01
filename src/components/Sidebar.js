import React, { Component } from 'react';
import '../assets/css/sidebar.css';
import 'materialize-css';
import {bubble as Menu} from 'react-burger-menu';
import SVGIcon from './SVGIcon'

const stars = require('../assets/images/stars.jpeg');
const saleh = require('../assets/images/saleh.jpeg');

class Sidebar extends Component {
    
    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return (
            <Menu className="col s12 m4 l3">
                <ul id="slide-out" className="sidenav sidenav-fixed grey darken-4">
                    <div>
                        <li>
                            <div className="user-view">
                                <div className="background">
                                    <img alt="Star Img" src={stars} />
                                </div>
                                <img className="circle" alt="Saleh Img" src={saleh} />
                                <span className="white-text name">Saleh Nazih, 21 anos</span>
                                <span className="white-text email">saleh.nazih.dev@gmail.com</span>
                            </div>
                        </li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Quem sou eu?</span></a></li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Formação Acadêmica</span></a></li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Experiência</span></a></li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Projetos</span></a></li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Conhecimentos</span></a></li>
                        <li className="bottom-effect"><a href="#!"><span className="nav-font">Interesses</span></a></li>
                        <li>
                            <div className="image-box">
                                <a className="icon-minus__radius" href="https://github.com/devsalula" target="_blank">
                                    <SVGIcon icon='git' />
                                </a>
                                <a className="icon-minus__radius" href="https://www.linkedin.com/in/saleh-nazih-abdel-kader-801b0716a" target="_blank">
                                    <SVGIcon icon='link' />
                                </a>
                            </div>
                        </li>
                    </div>
                </ul>
            </Menu>
        );
    }
}
export default Sidebar;