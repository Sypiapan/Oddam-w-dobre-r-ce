
import React, {useState, useEffect} from "react";
import OrganisationList from "./OrganisationList";

export default function Organisation() {
    const [selectedItems, setSelectedItems] = useState('Fundacje');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const url = "http://localhost:8000";

    useEffect(() => {
        //fetch(`${url}/${selectedItems}`)
         fetch(`${url}/${selectedItems}`)
            .then(res =>{return res.json()})
            .then((data)=>{

                setItems(data);
                console.log(data);
            })

    }, [])

    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,  indexOfLastItem);

    const handleClick = (selected) => {

        fetch(`${url}/selected`)
            .then(res =>{return res.json()})
            .then((data)=>{

                setItems(data);
                console.log(data);
            })

    }
    return (
        <main className="page_second-content">
            <h2 className="article-header">Komu pomagamy</h2>
            <div className="head_icon"></div>
            <div className="page_second_buttons">
                <div className="page_second_buttons_item" onClick={() => handleClick('Fundacje')}>Fundacjom</div>
                <div className="page_second_buttons_item" onClick={() => handleClick('Organizacje')}>Organizacjom pozarządowym</div>
                <div className="page_second_buttons_item" onClick={() => handleClick('Zbiorki')}>Lokalnym zbiórkom</div>
            </div>


             <OrganisationList items={currentItems} totalItems={items.length} itemsPerPage={itemsPerPage} />
        </main>
    );
}
