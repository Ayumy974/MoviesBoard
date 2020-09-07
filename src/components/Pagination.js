// *** Composant pagination Home page ***
import React from 'react';

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    // Styles inline:
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0',
    }

    const astyle = {
        fontSize: '1.5rem',
        borderRadius: '50%',
        background: '#4fc3f7 ',
        margin: '0 1rem',
    }
    return (
        <ul style={style} className="pagination">
            {/* <li className="disabled"><i className="material-icons">chevron_left</i></li> */}
            {pageNumbers.map(number => (
                <li key={number} className="waves-effect">
                    <a style={astyle} onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
            {/* <li className="disabled"><i className="material-icons">chevron_right</i></li> */}
        </ul>
    )
}

export default Pagination

