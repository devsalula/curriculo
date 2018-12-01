import React, { Component } from 'react';
import '../assets/css/sidebar.css';
import 'materialize-css';
import SVGIcon from './SVGIcon'

const stars = require('../assets/images/stars.jpeg');
const saleh = require('../assets/images/saleh.jpeg');


const Sidebar = () => (

    <div className="col s12 m4 l3">
        <ul id="slide-out" className="sidenav sidenav-fixed grey darken-4">
            <div>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={stars} />
                        </div>
                        <a><img className="circle" src={saleh} /></a>
                        <a><span className="white-text name">Saleh Nazih, 21 anos</span></a>
                        <a><span className="white-text email">saleh.nazih.dev@gmail.com</span></a>
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
                        <a href="https://github.com/devsalula" target="_blank">
                            <SVGIcon icon='git' />
                        </a>
                        <a href="image-box" href="https://www.linkedin.com/in/saleh-nazih-abdel-kader-801b0716a" target="_blank">
                            <SVGIcon icon='link' />
                        </a>
                    </div>
                </li>
            </div>
        </ul>
    </div>
);
export default Sidebar;