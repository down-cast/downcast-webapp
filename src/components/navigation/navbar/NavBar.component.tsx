import Image from "next/image";
import {Component, FC} from "react";
import styles from "./NavBar.module.scss";
import ButtonType, {Button} from "../../buttons/Button.component";
import {NavItem} from "./nav-item/NavItem.component";
import Search from "/public/assets/icons/search.svg";
import Moon from "/public/assets/icons/moon.svg";
import classNames from "classnames";


class NavBar extends Component<{}, { scrolled: boolean }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            scrolled: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll = () => {
        let offset = window.scrollY;
        if ((offset >= 40 && !this.state.scrolled)
            || (offset === 0 && this.state.scrolled)) {
            this.setState({scrolled: !this.state.scrolled});
        }
    };


    componentDidMount() {
        super.componentDidMount?.();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        super.componentWillUnmount?.();
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className={classNames(styles.background,
                this.state.scrolled && styles.scrolled)}>
                <nav className={styles.navBar}>
                    <div className="headline3"
                         style={{color: "var(--color-on-background)"}}>
                        LOGO
                    </div>
                    <ul className={styles.navItems}>
                        <NavItem text={"Guides"}></NavItem>
                        <NavItem text={"Explore"} isActive={true}></NavItem>
                        <NavItem text={"Contribute"}></NavItem>
                        <NavItem text={"About"}></NavItem>
                    </ul>
                    <div className={styles.rightItems}>
                        <Search alt={"Search"} style={{fill: "var(--color-on-background)"}}/>
                        <Moon alt={"Dark mode toggle"}/>
                        <Button text={"Sign in"} type={ButtonType.text}/>
                        <Button text={"Sign up"} type={ButtonType.primary}/>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
