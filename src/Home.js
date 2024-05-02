import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h1>Atividades React</h1>
            <h2>João Vitor Silva Moreno</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv1">Atividade 01</Link>
                    </li>
                    <li>
                        <Link to="/Atv2">Atividade 02</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;