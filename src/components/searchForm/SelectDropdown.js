import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const SelectDropdown = ({ movie }) => {

    const options = movie.map(m => {
        const d = new Date(m.release_date);
        console.log(d);
        return {
            key: m.id,
            text: m.title + 'Sortie le:' + d.toLocaleDateString(),
            value: m.title,
        }
    });

    console.log(options);
    return (
        <Dropdown
            placeholder='Résultats'
            fluid
            selection
            options={options}
        />      
    )
}

export default SelectDropdown
