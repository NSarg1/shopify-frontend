import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ShopPreview from "./shop-preview/ShopPreview.page";
import ShopCategory from "./shop-category/ShopCategory.component";

import styles from "./shop.module.scss";
import ShopModal from "src/pages/shop/components/shop-modal/ShopModal.component";

const Shop = ({ history }) => {
    const { modalIsShown } = useSelector((store) => store.shop);

    return (
        <div className={styles.container}>
            <Route component={ShopPreview} exact path="/shop" />
            <Route component={ShopCategory} path="/shop/:category" />
            {modalIsShown && <ShopModal />}
        </div>
    );
};

export default Shop;
