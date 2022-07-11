import {FC, PropsWithChildren} from "react";
import NavBar from "../../navigation/navbar/NavBar.component";
import Footer from "../../navigation/footer/Footer.component";
import styles from "./LayoutWithNavAndFooter.module.scss";

export const LayoutWithNavAndFooter: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.layout}>
        <NavBar/>
        <main className={styles.children}>{children}</main>
        <Footer/>
    </div>
}