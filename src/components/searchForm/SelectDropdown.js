import React, { useState, useEffect } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import axios from 'axios';

const SelectDropdown = ({ results }) => {
    const [selectMovie, setSelectMovie] = useState(null);
    const [id, setId] = useState('');

    useEffect(() => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c02af810400f5deb3c8e1d432b4a9775&language=en-US&page=1`).then(response => setSelectMovie(response.data)).catch(error=> console.log(error))      
    }, [id]);

    const options = results.map(m => {
        const d = new Date(m.release_date);
        return {
            key: m.id,
            text: `${m.title} / Sortie le: ${d.toLocaleDateString()}`,
            value: m.id,
        }
    });

    return (
        <Form>
            <Dropdown
                placeholder='Résultats'
                fluid
                selection
                options={options}
                onChange={(e, {value}) => setId(value)}
            />
            <button type="submit"></button>
        </Form>
    )
}

export default SelectDropdown
