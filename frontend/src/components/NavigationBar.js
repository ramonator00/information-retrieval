import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {useEffect, useState} from "react";
import classnames from "classnames";
import logo from "../assets/img/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch} from "@fortawesome/fontawesome-free-solid";

function NavigationBar() {

    const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    useEffect(() => {

        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    return (
        <>
            <Navbar
                className={classnames("fixed-top", navbarColor)}
                color-on-scroll="300"
                expand="lg">

                <div className="navbar-translate ms-xl-5">
                    <NavbarBrand href="/"><img src={logo} alt="logo" width="55" height="55"/></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbarCollapse}/>
                    <Button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}>
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </Button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}>
                    <Nav navbar>
                        <NavItem>
                        <NavLink
                            href="/">
                            <i className="nc-icon nc-zoom-split"/> Search
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">
                                <i className="nc-icon nc-atom"/> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            href="https://github.com/rkoksa/information-retrieval.git"
                            target="_blank">
                            <FontAwesomeIcon icon={faCodeBranch} className="fa fa-play play" size="1x" />
                        </NavLink>
                            </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </>
    );
}

export default NavigationBar;

