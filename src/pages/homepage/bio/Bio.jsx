/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import file from "./../../../assets/file/file.pdf";

function Bio() {
    return (
        <>
            {/* <div className="bio" style={{ height: "100vh" }}> */}
            <div className="bio">
                <div className="container py-5">
                    <div className="content row">
                        <div className="title col-12 col-md-4 col-lg-4 mb-3">
                            <h2 className="fs-1  fw-bold text-capitalize ">
                                About Me
                            </h2>
                        </div>

                        <div className="down col-12  col-md-8 col-lg-8">
                            <p className="mb-4 text-secondary">
                                My name is Katie, and I'm a passionate web
                                developer and graphic designer. I've been
                                working in the tech industry for over 10 years,
                                focusing primarily on front-end development. I
                                love creating engaging and user-friendly
                                interfaces that make a difference in people's
                                lives.
                            </p>

                            <div className="">
                                <a
                                    href={file}
                                    download
                                    className="d-inline-block fs-5 text-capitalize text-decoration-none py-2 px-4 border border-1 text-bg-dark"
                                >
                                    download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bio;
