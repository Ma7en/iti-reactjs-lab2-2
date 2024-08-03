/* eslint-disable no-unused-vars */
import React from "react";
import portfolio from "./../../../data/portfolio.js";
import Port from "./port/Port.jsx";

function Portfolio() {
    return (
        <>
            {/* <div className="portfolio" style={{ height: "100vh" }}> */}
            <div className="portfolio">
                <div className="container py-5">
                    <div className="title title text-start mb-5">
                        <h2 className="fs-1 fw-bold text-capitalize ">
                            portfolio
                        </h2>
                    </div>

                    <div className="content row g-3 align-items-stretch px-4">
                        {portfolio.map((port) => {
                            return <Port portfolio={port} key={port.id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
