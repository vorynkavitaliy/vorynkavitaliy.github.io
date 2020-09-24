import React from 'react'

const Paginator = ({paginate, usersPerPage, totalUsers}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++){pageNumbers.push(i)}

    return (
        <nav className="pagination-container">
            {pageNumbers.length < 2 ? null :
                <ul className="pagination">
                    {pageNumbers.map(number => 
                        <li key={number} className="page-item">
                            <span onClick={() => paginate(number)} className="page-link">{number}</span>
                        </li>)}
                </ul> 
            }
        </nav>
    )
}

export default Paginator
