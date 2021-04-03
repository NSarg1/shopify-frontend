import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
// LAYOUT
import Header from "src/layout/header/Header.layout";
// STYLES
import styles from "./app.module.scss";
// PAGES
import HomePage from "src/pages/home/Home.page";
import AuthPage from "src/pages/auth/Auth.page";
import ShopPage from "src/pages/shop/Shop.page";
import ShopCategory from "src/pages/shop-category/ShopCategory.component";

import Button from "src/components/button/Button.component";

// import { appIsLoading } from "src/redux/common/common.reducer";

const App = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: "CHANGE_NAME" });
    };
    const handleAgeClick = () => {
        dispatch({ type: "CHANGE_AGE" });
    };

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div>{props.common.name}</div>
                <div>{props.common.age}</div>
                <Button onClick={handleClick}>Change name</Button>
                <Button onClick={handleAgeClick}>Change age</Button>
                <Switch>
                    <Route component={HomePage} path="/home" />
                    <Route component={AuthPage} path="/auth" />
                    <Route exact path="/shop">
                        <ShopPage />
                    </Route>
                    <Route component={ShopCategory} path="/shop/:category" />
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </main>
        </div>
    );
};

const mapStateToProps = (store) => ({ common: store.common });

export default connect(mapStateToProps)(App);
