import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ShopPreview from "./components/shop-preview/ShopPreview.component";
import ShopCategory from "./components/shop-category/ShopCategory.component";
import WithModal from "src/HOCs/with-modal/WithModal.hoc";
import ShopModalComponent from "src/pages/shop/components/shop-modal/ShopModal.component";

// ACTIONS
import { setModalState } from "src/redux/shop/shop.actions";
// SELECTORS
import { selectShop } from "src/redux/shop/shop.selectors";

import styles from "./shop.module.scss";

const ShopModal = WithModal(ShopModalComponent);

const Shop = () => {
    const { modalIsShown } = useSelector(selectShop);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <Route component={ShopPreview} exact path="/shop" />
            <Route component={ShopCategory} path="/shop/:category" />
            <ShopModal
                isOpen={modalIsShown}
                handleModalClose={() => dispatch(setModalState(false))}
            />
        </div>
    );
};

export default Shop;
