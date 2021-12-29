import React from 'react'

const Innerbanner = () => {
    return (
        <div className="banner_section">
            <div className="blue_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="310" height="309.667"
                    viewBox="0 0 310 309.667">
                    <defs>
                        <linearGradient id="linear-gradient1" x1="0.177" y1="0.141" x2="1.216" y2="1.091"
                            gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#2d6df2" />
                            <stop offset="1" stopColor="#7d00ac" />
                        </linearGradient>
                    </defs>
                    <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="155" cy="154.834" rx="155" ry="154.834"
                        fill="url(#linear-gradient1)" />
                </svg>
            </div>
            <div className="orenge_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1320.947" height="1320.757"
                    viewBox="0 0 1320.947 1320.757">
                    <defs>
                        <linearGradient id="linear-gradient2" x1="0.071" y1="0.201" x2="0.717" y2="0.877"
                            gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fad736" />
                            <stop offset="1" stopColor="#f02e2e" />
                        </linearGradient>
                    </defs>
                    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="483.336" cy="483.595" rx="483.336" ry="483.595"
                        transform="translate(1320.947 483.595) rotate(120)" fill="url(#linear-gradient2)" />
                </svg>

            </div>
            <div className="red_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="405" height="404.565"
                    viewBox="0 0 405 404.565">
                    <defs>
                        <linearGradient id="linear-gradient3" x1="0.774" y1="0.446" x2="0.453" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fe4d5f" />
                            <stop offset="1" stopColor="#db1212" />
                        </linearGradient>
                    </defs>
                    <ellipse id="Ellipse_188" data-name="Ellipse 188" cx="202.5" cy="202.283" rx="202.5" ry="202.283"
                        transform="translate(405 404.565) rotate(180)" fill="url(#linear-gradient3)" />
                </svg>

            </div>
            <div className="container">
                <div className="banner_info">
                    <p className="wow fadeInUp" >PROCESS</p>
                    <h1 className="wow fadeInUp">The Mamba Mentality</h1>
                </div>
            </div>
        </div>
    )
}

export default Innerbanner
