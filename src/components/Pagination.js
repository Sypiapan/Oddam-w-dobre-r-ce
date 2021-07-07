import React, {useState} from "react";


export default function Pagination({totalItems, itemsPerPage, setCurrentPage}) {




    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);

    }

    return (
        <nav>
            <ul className="paginaton">
                {pageNumbers.map(number => (
                    <li key={number} className ="page-item" onClick={() => setCurrentPage(number)}>
                        <span className ="page-link">{number} </span>
                    </li>
                ))}

            </ul>
        </nav>
    );
}