import Pagination from "./Pagination";
import React from "react";


export default function OrganisationList({items, itemsPerPage, totalItems, setCurrentPage}) {

    return (

        <>

            {items.map((item) => (
                <>

                    <div className="organisationList">
                        <div className="organisationList_item"></div>
                            <p className="listTitle" key={item.id}>{item.name}</p>
                            <span key={item.id}>{item.target}</span>


                        <span key={item.id}>{item.description}</span>
                    </div>


                </>

            ))


            }
            <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} setCurrentPage={setCurrentPage}/>

        </>
    );
}