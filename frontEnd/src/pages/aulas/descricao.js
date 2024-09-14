import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchAulaById } from '../../services/dados-aulas';

function Descricao() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [aula, setAula] = useState(null);

    useEffect(() => {
        const getAula = async () => {
            const fetchedAula = await fetchAulaById(parseInt(id, 10));
            setAula(fetchedAula);
        };

        getAula();

    }, [id]);

    if (!aula) {
        return <div>Aula não encontrada.</div>;
    }

    return (
        <main>
            <button type="button mx-5" onClick={() => navigate('/aula')} className="btn-simples my-4 mx-4 ">Voltar</button>
            <div className='text-center'>
                <h2 className='titulo my-5'>Tema de {aula.titulo}</h2>
                <div className='border rounded py-5' style={{ width: '50%', margin:'0 auto '}}>
                    <img src={`http://localhost:5000/img/${aula.capa}` || "https://via.placeholder.com/150"} style={{ width: '10em', height: '8em' }} alt={aula.titulo} />
                    <h5 className="card-title mt-3 titulo">{aula.titulo || "Título Indisponível"}</h5>
                    <p className="card-text my-5" style={{ width: '25em', margin:'0 auto ' }}>{aula.descricao || "Descrição não disponível."}</p>
                </div>
            </div>
        </main>
    );
}

export default Descricao;
