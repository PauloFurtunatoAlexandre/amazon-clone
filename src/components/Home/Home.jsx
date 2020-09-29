import React from "react";
import Product from "../Product/Product";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg"
                alt="homepage banner"
            />
            <div className="home__row">
                <Product
                    id={1}
                    title={"La Sportiva Sneakers - Men's Bushido II Running Shoe"}
                    image={
                        "https://m.media-amazon.com/images/I/41fD3JYh-oL._AC_SY200_.jpg"
                    }
                    price={45.99}
                    rating={4}
                />
                <Product
                    id={2}
                    title={"Canon PowerShot SX530 Digital Camera w/ 50X Optical Zoom - Wi-Fi & NFC Enabled (Black)"}
                    image={
                        "https://m.media-amazon.com/images/I/61xeTmAQDNL._AC_UY218_.jpg"
                    }
                    price={199.00}
                    rating={5}
                />
                <Product
                    id={3}
                    title={"Oster BPCT02-BA0-000 6-Cup Glass Jar 2-Speed Toggle Beehive Blender, Brushed Stainless"}
                    image={
                        "https://m.media-amazon.com/images/I/41wHKSZI6kL._AC_UY218_.jpg"
                    }
                    price={56.90}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id={4}
                    title={"$25 PlayStation Store Gift Card [Digital Code]"}
                    image={
                        "https://m.media-amazon.com/images/I/71mZxbOlakL._AC_UY218_.jpg"
                    }
                    price={25.00}
                    rating={4}
                />
                <Product
                    id={5}
                    title={"Apple AirPods with Wireless Charging Case"}
                    image={
                        "https://m.media-amazon.com/images/I/710rzW2RGcL._AC_UY218_.jpg"
                    }
                    price={129.98}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id={"6"}
                    title={
                        'Apple 15.4" MacBook Pro w/Touch Bar (Mid 2019), Intel Core i9-9880H 2.3GHz, 512GB PCI-E SSD, 16GB DDR4, 802.11ac, Space Gray (Renewed)'
                    }
                    image={
                        "https://m.media-amazon.com/images/I/41cJj6G7a1L._AC_UY218_.jpg"
                    }
                    price={1898.99}
                    rating={5}
                />
            </div>
        </div>
    );
};

export default Home;
