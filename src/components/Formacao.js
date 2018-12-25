import React from 'react';
import 'materialize-css';
import '../assets/css/formacao.css';

const Formacao = () => {
    return(
        <div className="size-block">
            <div>
                <h2 className="color-font">Formação Acadêmica</h2>
                <ol className="list-text_style">
                    <li>
                        Centro de Ensino Médio Setor Leste
                        <ul className="list-subtext_style"><li>Ensino Médio: 2013-2015</li></ul>
                    </li>
                    <li className="margin-special">
                        Universidade de Brasília
                        <ul className="list-subtext_style"><li>Engenharia de Software: 2016-Atualmente</li></ul>
                    </li>
                </ol>
            </div>
            <div>
                <h2 className="color-font">Experiência</h2>
            </div>
        </div>
    );
}


export default Formacao;