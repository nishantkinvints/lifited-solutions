import React from 'react'

const Innerbanner = () => {
    return (
        <div className="banner_section">
            <div className="blue_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="310" height="310" viewBox="0 0 310 310">
                    <defs>
                        <linearGradient id="linear-gradient2234" x1="0.177" y1="0.141" x2="1.216" y2="1.091" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#2d6df2"></stop>
                            <stop offset="1" stopColor="#7d00ac"></stop>
                        </linearGradient>
                    </defs>
                    <circle id="blue" cx="155" cy="155" r="155" fill="url(#linear-gradient2234)"></circle>
                </svg>
            </div>
            <div className="orenge_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="405" height="405" viewBox="0 0 405 405">
                    <defs>
                        <linearGradient id="linear-gradient122" x1="-0.119" y1="0.5" x2="1" y2="0.346" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fad736"></stop>
                            <stop offset="1" stopColor="#f02e2e"></stop>
                        </linearGradient>
                    </defs>
                    <circle id="orange" cx="202.5" cy="202.5" r="202.5" transform="translate(405 405) rotate(180)" fill="url(#linear-gradient122)"></circle>
                </svg>
            </div>
            <div className="red_circle banner_circle animation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1320.947" height="1320.947" viewBox="0 0 1320.947 1320.947">
                    <defs>
                        <linearGradient id="linear-gradient56" x1="0.816" y1="0.853" x2="0.103" y2="0.269" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#fe4d5f"></stop>
                            <stop offset="1" stopColor="#db1212"></stop>
                        </linearGradient>
                    </defs>
                    <circle id="red" cx="483.5" cy="483.5" r="483.5" transform="translate(1320.947 483.5) rotate(120)" fill="url(#linear-gradient56)"></circle>
                </svg>
            </div>
            <div className="container">
                <div className="banner_info">
                    <p className="wow fadeInUp">Projects</p>
                    <h1 className="wow fadeInUp">Showcasing Our Finest Works</h1>
                </div>
            </div>
        </div>
    )
}

export default Innerbanner
