import React from 'react';

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>

            {pageNumbers.map(number => (
                <li key={number} className="waves-effect">
                    <a  onClick={() => paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
            <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination

