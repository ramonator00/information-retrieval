import {Button, CardTitle, Col, Container, InputGroup, Row,} from "reactstrap";
import FormControl from "react-bootstrap/FormControl";
import LandingPage from "./LandingPage";
import {useState} from "react";
import MOCKDATA from "../assets/mockdata/recipes_de.json"

export default function Search() {

    const [searchTerm,setSearchTerm] = useState('');

    document.documentElement.classList.remove("nav-open");
    return (
        <>
            <LandingPage/>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="12">
                                <h2 className="title">What do you want to eat today?</h2>
                                <p className="h5 description">
                                    Find your favorite recipe.
                                    <i className="nc-icon nc-zoom-split"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <div className="justify-content-center align-items-center margin-top"></div>
                            <InputGroup className="col-6">
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    onChange={e=>setSearchTerm(e.target.value)}
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <i className="nc-icon nc-zoom-split"/>
                                </Button>
                            </InputGroup>
                        </Row>
                        <Row>
                                    {MOCKDATA.slice(0, 5).filter((val)=>{
                                        console.log(val)
                                        if(searchTerm === ""){
                                            return val
                                        }
                                        else if(val.Ingredients.toLowerCase().includes(searchTerm.toLowerCase())){
                                            return val;
                                        }
                                    }).map((val)=>{
                                        return <div className="margin-top">
                                            <CardTitle>{val.Name}</CardTitle>
                                            {val.Ingredients.map((item) => <li value={item}>{item}</li>)}
                                        </div>
                                    })}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
