import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Filter from './Filter';
import { fetchApiData } from '../services/api';

const Home = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchApiData();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
                setIsLoading(false);
            }
        };

        loadData();
    }, []);
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="home-container">
            <h1>Catálogo Principal</h1>

            { }
            <Filter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            { }
            {isLoading && <p>Carregando dados...</p>}

            {!isLoading && filteredData.length === 0 && searchTerm !== '' && (
                <p>Nenhum item encontrado para "{searchTerm}".</p>
            )}

            { }
            <ItemList items={filteredData} />
        </div>
    );
};

export default Home;