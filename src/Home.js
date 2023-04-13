import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <ImageSlider />

                <div className="home_row">
                    <Product 
                        id="12321341"
                        title="Nike Mens Air Jordan 1 Mid Basketball Shoe"
                        price={18500}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61FPLZui7VL._UL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Apple iPhone 14 Pro Max (128GB) - Graphite"
                        price={139999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Dell XPS 13 Plus Laptop, Intel i7-1260P, 16GB, 1TB SSD, Win 11 + MSO'21, 13.4 (34.036Cms) UHD+ AR 500 nits Touch, Backlit KB, 1.24Kgs"
                        price={215000}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61rvR2b3flL._SL1080_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Olive/Gold, One Size"
                        price={15000}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71q11tL2FmS._SL1500_.jpg "
                    />
                    <Product
                        id="49538094"
                        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
                        price={82300}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="Google Pixel 6 Pro (Sorta Sunny, 12GB RAM, 128GB Storage)"
                        price={49999}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Alienware Low-Profile RGB Gaming Keyboard AW510K Light, Alienfx Per Key RGB Lighting, Media Controls and USB Passthrough, Cherry MX Low Profile Red Switches, Lunar Light"
                        price={26900}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/619TnxPGH4S._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Oneplus Buds Pro Bluetooth Truly Wireless in Ear Earbuds with mic, Smart Adaptive Noise Cancellation, 10 Minutes Warp Charge, Upto 38 Hours Battery, Zen Mode, Bluetooth 5.2v (Matte Black)"
                        price={7990}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51AZkiInyhS._SL1500_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="MSI GeForce RTX 3080 Ti Gaming X Trio 12G 12GB GDDR6X 384-bit pci_e_x16 Gaming Graphic Card"
                        price={151300}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81kf3+5l2LS._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Yamaha TRBX174 4-String Electric Bass Guitar - Dark Blue Metallic"
                        price={19999}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71kOMjCSPOL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 256GB) - Space Grey (5th Generation)"
                        price={108900}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home