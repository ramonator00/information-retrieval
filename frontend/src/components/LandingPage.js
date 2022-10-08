import {Button, Container} from "reactstrap";
import {createRef, useEffect} from "react";
import banner from "../assets/img/banner.jpg";
import {faPlay} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * This component returns the banner of landing page and swipes the header color
 *
 * @returns {JSX.Element}
 * @component
 */
function LandingPage() {

    let pageHeader = createRef();

    useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        `url('${banner}')`,
                }}
                className="page-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter"/>
                <Container>
                    <div className="motto text-center">
                        <h1>{("Find your recipe")}</h1>
                        <p className="h3 mb-4">{("happy searching...")}</p>

                        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                target="_blank"
                                className="btn-round mx-2"
                                color="neutral"
                                outline
                        >
                            <FontAwesomeIcon icon={faPlay} className="fa fa-play play" size="xs" color='white' />Watch video
                        </Button>
                        <Button href="/"
                                target="_blank"
                                className="btn-round mx-2 btn"
                                color="neutral"
                                outline
                        >
                            <i className="nc-icon nc-zoom-split"/> Search
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default LandingPage;
