import React from 'react'

const FilmSelection = () => {
    return (
        <div>
            <label htmlFor="sort">Choisissez votre film</label>

                <select name="sort" id="pet-select">
                    <option value=""></option>
                    <option value="titke">Titre</option>
                    <option value="date">Date de sortie</option>
                    <option value="category">Catégorie</option>
                </select>
        </div>
    )
}

export default FilmSelection
