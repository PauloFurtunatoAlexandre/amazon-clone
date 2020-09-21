import React from "react";
import Product from "../Product/Product";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
                alt="homepage banner"
            />
            <div className="home__row">
                <Product
                    id={"9281323"}
                    title={"La Sportiva Sneakers - Men's Bushido II Running Shoe"}
                    image={
                        "https://m.media-amazon.com/images/I/41fD3JYh-oL._AC_SY200_.jpg"
                    }
                    price={"45.99"}
                    rating={4}
                />
                <Product
                    id={"9281326"}
                    title={"Canon PowerShot SX530 Digital Camera w/ 50X Optical Zoom - Wi-Fi & NFC Enabled (Black)"}
                    image={
                        "https://m.media-amazon.com/images/I/61xeTmAQDNL._AC_UY218_.jpg"
                    }
                    price={"199.00"}
                    rating={5}
                />
                <Product
                    id={"9281327"}
                    title={"Oster BPCT02-BA0-000 6-Cup Glass Jar 2-Speed Toggle Beehive Blender, Brushed Stainless"}
                    image={
                        "https://m.media-amazon.com/images/I/41wHKSZI6kL._AC_UY218_.jpg"
                    }
                    price={"56.90"}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id={"9281328"}
                    title={"$25 PlayStation Store Gift Card [Digital Code]"}
                    image={
                        "https://m.media-amazon.com/images/I/71mZxbOlakL._AC_UY218_.jpg"
                    }
                    price={"25.00"}
                    rating={4}
                />
                <Product
                    id={"9281329"}
                    title={"Apple AirPods with Wireless Charging Case"}
                    image={
                        "https://m.media-amazon.com/images/I/710rzW2RGcL._AC_UY218_.jpg"
                    }
                    price={"129.98"}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id={"9281330"}
                    title={
                        'Apple 15.4" MacBook Pro w/Touch Bar (Mid 2019), Intel Core i9-9880H 2.3GHz, 512GB PCI-E SSD, 16GB DDR4, 802.11ac, Space Gray (Renewed)'
                    }
                    image={
                        "https://m.media-amazon.com/images/I/41cJj6G7a1L._AC_UY218_.jpg"
                    }
                    price={"1,898.00"}
                    rating={5}
                />
            </div>
        </div>
    );
};

export default Home;
