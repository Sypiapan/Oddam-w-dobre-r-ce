import Logo from "../assets/Icon-1.svg";
import Logo2 from "../assets/Icon-2.svg";
import Logo3 from "../assets/Icon-3.svg";
import Logo4 from "../assets/Icon-4.svg";
import React, { useState, useEffect }  from "react";

export default function Organisation() {
    const [selectedItems, setSelectedItems] = useState('fundacje');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        //fetch(`${url}/${selectedItems}`)
        setItems([{n: 'a', desc: 'b'},{n: 'a', desc: 'b'},{n: 'a', desc: 'b'},{n: 'a', desc: 'b'}])
    }, [])

    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,  indexOfLastItem);

    const handleClick = (selected) => {

    }
    return (
        <main className="page_second-content">
            <h2 className="article-header">Komu pomagamy</h2>
            <div className="head_icon"></div>
            <div className="page_second_buttons">
                <div className="page_second_buttons_item" onClick={() => handleClick('fundacje')}>Fundacjom</div>
                <div className="page_second_buttons_item">Organizacjom pozarządowym</div>
                <div className="page_second_buttons_item">Lokalnym zbiórkom</div>
            </div>
            {currentItems.map(el => (
                <div>
                    <p>{el.n}</p>
                    <span>{el.desc}</span>
                </div>
            ))}

</main>
);
}