import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./shop.module.scss";

const Shop = () => {
    const [shopState, setShopState] = useState([]);

    useEffect(() => {
        axios.get("shop").then((result) => {
            const { data } = result;
            setShopState(data);
        });
    }, []);

    const categories = ["hats", "sneakers", "womens", "mens", "jackets"];

    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const filteredData = shopState.filter((shopItem) => shopItem.category === category);
                return (
                    <div key={category}>
                        <h1>{category}</h1>
                        {filteredData.map((shopItem) => {
                            return <div key={shopItem._id}>{shopItem.name}</div>;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;
