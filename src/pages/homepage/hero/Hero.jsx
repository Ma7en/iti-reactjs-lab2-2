/* eslint-disable no-unused-vars */
import React from "react";
// data:image/jpeg;base64,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
// https://images8.alphacoders.com/133/thumbbig-1337140.webp
// https://mrwallpaper.com/images/hd/cool-dark-night-with-bright-moon-fhgujhftozmeo6gm.jpg
// https://images5.alphacoders.com/133/thumb-350-1331867.webp
// https://images5.alphacoders.com/133/thumbbig-1331867.webp

function Hero() {
    return (
        <>
            <div
                className="bio"
                style={{
                    background:
                        "url(https://images5.alphacoders.com/133/thumbbig-1331867.webp)",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container h-100 d-flex justify-content-left align-items-center">
                    <div className="content ">
                        <h2 className="fs-1 text-white fw-bold text-capitalize text-center">
                            Katie Reed
                        </h2>
                        <p className="fs-2 text-white fw-bold text-capitalize">
                            web developer & designer
                        </p>
                        <div>
                            <a
                                href="#"
                                className="d-inline-block fs-3 text-capitalize text-decoration-none py-2 px-3 border border-1 text-white"
                            >
                                contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
