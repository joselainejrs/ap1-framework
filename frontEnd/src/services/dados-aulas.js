import axios from 'axios';

export const fetchAulas = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/dados');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar aulas:', error);
        return [];
    }
};

export const fetchAulaById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/dados/${id}`);
        console.log('Dados retornados pela API:', response.data); 
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar a aula:', error);
        return null;
    }
};


