import type { NextPage } from "next";
import Footer from "../components/navigation/footer/Footer.component";
import NavBar from "../components/navigation/navbar/NavBar.component";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={`headline1 ${styles.text}`}>TEXT</div>
      <div className="headline3">TEXT</div>
      <Footer />
    </>
  );
};

export default Home;
