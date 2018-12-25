import React from 'react';
import '../assets/css/apresentation.css'
import 'materialize-css';

const Apresentation = () => {

    return (
        <div className="row background-space">
            <div>
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>
            <div className="name-position col s12 m8">
                <h1 className="glitch" data-text="Saleh Kader">Saleh Kader</h1>
                <p className="apresentation-text">
                    Olá, me chamo Saleh Nazih Abdel Kader, sou estudante do curso de <br/> 
                    Engenharia de Software da Universidade de Brasília e Presidente Organizacional
                    da Orc'estra Gamificação.
                    <br/>
                    Apresento interesse em Machine Learning, Inteligência Articial, Desenvolvimento Web e Mobile.
                </p>
            </div>
        </div>
    );
}

export default Apresentation;