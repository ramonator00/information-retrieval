import {Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/fontawesome-free-solid'

export default function Footer() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <div className="credits ml-auto">
            <span className="copyright">
              &copy; {new Date().getFullYear()}, made with
                        <FontAwesomeIcon icon={faHeart} className="fa fa-heart heart" size="xs" color='red' />
                at FFHS - Ramona Koksa
            </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}
