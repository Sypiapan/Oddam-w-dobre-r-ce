import Pagination from "./Pagination";
import React from "react";


export default function OrganisationList({items, itemsPerPage, totalItems}) {

    return (

        <>

            {items.map((item) => (
                <>

                    <div>
                        <p key={item.id}>{item.name}</p>
                        <span key={item.id}>{item.target}</span>
                        <span key={item.id}>{item.description}</span>
                    </div>


                </>

            ))


            }
            <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems}/>

        </>
    );
}