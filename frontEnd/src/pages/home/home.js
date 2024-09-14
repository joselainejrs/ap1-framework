import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.module.css';

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const users = [
        {
            name: 'Enzo',
            username: 'enzo@gmail.com',
            senha: '123'
        },
        {
            name: 'Joselaine',
            username: 'joselaine@gmail.com',
            senha: '123'
        },
        {
            name: 'Odair',
            username: 'prof@gmail.com',
            senha: '123'
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(u => u.username === email && u.senha === senha);

        if (user) {
            navigate('/aula', { state: { user: user.name } });
        } else {
            setError('Credenciais inválidas');
        }
    };

    return (
        <main>
            <form className="conteudo-login my-5" method="post" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='titulo text-center mb-5' >Login</legend>
                    <div className="mb-2">
                        <label htmlFor="email" className='mb-2'>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Informe seu e-mail"
                            aria-label="email"
                            aria-describedby="addon-wrapping"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="senha" className='mb-2'>Senha</label>
                        <input
                            type="text"
                            id="senha"
                            className="form-control mb-5"
                            placeholder="Informe uma senha"
                            aria-label="senha"
                            aria-describedby="addon-wrapping"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-text">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100"  style={{ height: '50px' }}>Entrar</button>
                </fieldset>


            </form>
            <div className='text-center'>
                <span className='fw-bold'>Projeto realizado por</span> 
                <p className='titulo mt-2'> *** Joselaine Romão ***</p>
                <p className='titulo mt-2'> *** Enzo Mikami ***</p>
            </div>
        </main>
    );
}

export default Home;
