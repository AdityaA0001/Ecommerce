import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png" },
    { url: "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61T1M-s6LFL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61D0MS7v8FL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61x6A0i0RaL._SX3000_.jpg" },
];

const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={1530}
                height={300}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={4}
            />
        </div>
    );
}

export default ImageSlider