import {FC, PropsWithChildren} from "react";
import NavBar from "./navigation/navbar/NavBar.component";
import Footer from "./navigation/footer/Footer.component";
import styles from "/src/styles/Layout.module.scss";

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.layout}>
        <NavBar></NavBar>
        <div className={styles.children}>{children}</div>
        <Footer></Footer>
    </div>
}