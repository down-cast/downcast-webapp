import type {NextPage} from "next";
import Footer from "../components/navigation/footer/Footer.component";
import NavBar from "../components/navigation/navbar/NavBar.component";
import styles from "../styles/Home.module.scss";
import {LandingPageBanner} from "../components/landing-page-banner/LandingPageBanner.component";

const Home: NextPage = () => {
    return (
        <>
            <LandingPageBanner></LandingPageBanner>

        </>
    );
};

export default Home;
