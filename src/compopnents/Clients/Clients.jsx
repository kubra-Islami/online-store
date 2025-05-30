import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clients.css";


const clientLogos = [
    "../../../public/clients/clients-logo-01.png",
    "../../../public/clients/clients-logo-02.png",
    "../../../public/clients/clients-logo-03.png",
    "../../../public/clients/clients-logo-04.png",
    "../../../public/clients/clients-logo-05.png",
    "../../../public/clients/clients-logo-06.png",
    "../../../public/clients/clients-logo-07.png",
    "../../../public/clients/clients-logo-08.png",
];
const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 6 } },
        { breakpoint: 768, settings: { slidesToShow: 5 } },
        { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
};

const Clients = () => {
    return (
        <div
            className="w-full py-24 client-section-wrap bg-cover bg-center ptb-100 "
            style={{
                backgroundImage: 'url("/clients/main-bg.png")',
                margin: "7rem 0"
            }}>
            <div className="container mx-auto px-4 relative">
                {/* Headings */}
                <div className="client-text flex flex-col md:flex-row md:justify-between md:items-center relative z-10 gap-6">
                    <div className="md:w-1/3">
                        <div className="client-heading-wrap">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                Who are Happy With Services and Work
                            </h3>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="client-para text-gray-700">
                            Seamlessly administrate synergistic growth strategies and
                            collaborative markets. Globally empower inexpensive infomediaries
                            after sustainable mindshare. Phosfluorescently brand professional
                            collaboration and idea-sharing without principle-centered interfaces.
                        </div>
                    </div>
                </div>

                {/* Logos */}
                <div className="client-logo-wrap mt-10 relative z-20">
                    {/*<ul className="flex flex-wrap justify-center gap-6 sm:gap-8">*/}
                    {/*    {clientLogos.map((logo, index) => (*/}
                    {/*        <li key={index}>*/}
                    {/*            <img*/}
                    {/*                src={`/clients/${logo}`}*/}
                    {/*                alt={`client logo ${index + 1}`}*/}
                    {/*                className="client-img"*/}
                    {/*            />*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}

                    <Slider {...sliderSettings}>
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="text-center px-2">
                                <img
                                    src={logo}
                                    alt={`client logo ${index + 1}`}
                                    className="client-img mx-auto"
                                />
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default Clients;