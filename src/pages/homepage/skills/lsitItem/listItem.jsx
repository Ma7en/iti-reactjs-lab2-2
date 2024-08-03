/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ListItem({ items }) {
    const { name } = items;

    return (
        <>
            <li className="list-group-item list-group-item-action text-bg-dark">
                <a
                    href="#"
                    className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                >
                    {name}
                </a>
            </li>
        </>
    );
}

export default ListItem;
