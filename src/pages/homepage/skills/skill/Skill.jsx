/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Skill({ skills }) {
    const { name, percentage } = skills;

    return (
        <>
            <div className="skill row g-0 mb-3">
                <p className="col-3 p-2 bg-secondary m-0 text-center">{name}</p>

                <div className="col-9 bg-white">
                    <div
                        className="bg-info h-100"
                        style={{
                            width: `${percentage}%`,
                            opacity:
                                percentage === 100 ? "1" : `0.${percentage}`,
                            // backgroundColor: html,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Skill;
