/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Port({ portfolio }) {
    const { name, color } = portfolio;

    return (
        <>
            <div className="port col-12 col-md-6 col-lg-4 ">
                <div
                    className={`info p-5 text-center ${color}`}
                    style={{ minHeight: "200px" }}
                >
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    );
}

export default Port;
