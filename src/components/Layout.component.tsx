import {FC, ReactNode} from "react";
import NavBar from "./navigation/navbar/NavBar.component";
import Footer from "./navigation/footer/Footer.component";

type Props = {
    children: ReactNode
}

export const Layout: FC<Props> = ({children}) => {
    return <>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
    </>
}