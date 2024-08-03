/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer text-bg-dark">
                <div className="container pt-5 pb-3">
                    <div className="row g-5">
                        <div className="title col-12 col-md-12 col-lg-4 d-flex flex-column align-items-center">
                            <h4 className="fs-3 fw-bold text-capitalize">
                                git in touch
                            </h4>

                            <ul className="" style={{ listStyle: "none" }}>
                                <li>
                                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="fs-3 me-3"
                                    />
                                    <a
                                        href="#"
                                        className="text-white fs-3 text-decoration-none"
                                    >
                                        ms12@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="fs-3 me-3"
                                    />
                                    <a
                                        href="#"
                                        className="text-white fs-3 text-decoration-none"
                                    >
                                        01200112233
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="btn col-12 col-md-12 col-lg-4">
                            <a
                                href="#"
                                className="d-inline-block fs-5 text-capitalize text-decoration-none py-2 px-4 border border-1 text-bg-dark"
                            >
                                contact me
                            </a>
                        </div>

                        <div className="social col-12 col-md-12 col-lg-4  d-flex flex-column align-items-center">
                            <ul
                                className="d-flex gap-5"
                                style={{ listStyle: "none" }}
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="text-white fs-3 text-decoration-none"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="fs-3 me-3"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-white fs-3 text-decoration-none"
                                    >
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className="fs-3 me-3"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-white fs-3 text-decoration-none"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="fs-3 me-3"
                                        />
                                    </a>
                                </li>
                            </ul>

                            <p>copyright 2024 MS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
