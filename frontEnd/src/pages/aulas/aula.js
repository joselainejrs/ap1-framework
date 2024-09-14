import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchAulas } from '../../services/dados-aulas';
import Menu from '../componente/menu/menu';
import '../../index.css';

function Aula() {
    const [aulas, setAulas] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user;

    useEffect(() => {
        const getData = async () => {
            const fetchedAulas = await fetchAulas();
            setAulas(fetchedAulas);
        };

        getData();
    }, []);

    const handleSaibaMais = (id) => {
        navigate(`/aula/${id}`);
    };

    return (
        <div>
            <Menu />
            <p className='user mx-5'></p> <br/>
            <h3 className='fw-light my-5 text-center'>
                <span className='titulo'>{user ? `Olá, ${user}` : 'Bem-vindo!'}</span>  
                entenda mais sobre cada aula
            </h3>
            <div className='container'>
                <div className='row'>
                    {aulas.map((item, index) => (
                        <div className='col-12 col-md-6 col-lg-3 mb-4' key={index}>
                            <div className="card text-center" style={{ width: '100%' }}>
                                <img 
                                    src={`http://localhost:5000/img/${item.capa}` || "https://via.placeholder.com/150"} 
                                    className="card-img-top my-3" 
                                    style={{ width: '5em', height: '4em', margin:'0 auto'}} 
                                    alt={item.titulo} 
                                />
                                <div className="card-body">
                                    <p className="card-title">
                                        <span className='fw-bold'>Título: </span>
                                        {item.titulo || "Título Indisponível"}
                                    </p>
                                    <p className="card-title my-3">
                                        <span className='fw-bold'>Pergunta: </span>
                                        {item.pergunta || "Pergunta Indisponível"}
                                    </p>
                                    <button 
                                        onClick={() => handleSaibaMais(item.id)} 
                                        className="btn btn-primary"
                                        style={{ width: '100%', height: '40px' }}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Aula;
