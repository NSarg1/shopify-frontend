import Loader from "src/components/loader/Loader.component";
import styles from "./wrapper-loader-persist.module.scss";
import classNames from "classnames";

const WrapperLoaderPersist = (props) => {
    const { children, isLoading } = props;

    const childrenClasses = classNames({
        notVisible: isLoading,
    });

    return (
        <>
            {isLoading && (
                <div className={styles.container}>
                    <Loader />
                </div>
            )}
            <div className={childrenClasses}>{children}</div>
        </>
    );
};

export default WrapperLoaderPersist;
