import React from 'react';

function Menu() {


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container-fluid ms-5">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/aula">Aulas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
