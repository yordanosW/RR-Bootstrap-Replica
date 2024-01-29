import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Choose your store in <span style={{ color: "#108910", fontWeight: "bolder", textDecoration: "underline" }}><a style={{ color: "inherit" }} href='https://en.wikipedia.org/wiki/Las_Vegas'>Las Vegas</a></span></h2>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://a.mktgcdn.com/p/XfajeJVqlOebYif3f_T5qfULbACH0BeecBNqpI_uBZ4/400x400.jpg'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Smith's <br /> Delivery
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://a.mktgcdn.com/p/XfajeJVqlOebYif3f_T5qfULbACH0BeecBNqpI_uBZ4/400x400.jpg'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Smith's <br /> Delivery
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://a.mktgcdn.com/p/XfajeJVqlOebYif3f_T5qfULbACH0BeecBNqpI_uBZ4/400x400.jpg'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Smith's <br /> Delivery
                            </Card.Text>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/800px-Costco_Wholesale_logo_2010-10-26.svg.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Costco 
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/800px-Costco_Wholesale_logo_2010-10-26.svg.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Costco 
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/800px-Costco_Wholesale_logo_2010-10-26.svg.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Costco 
                            </Card.Text>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://1000logos.net/wp-content/uploads/2021/04/Albertsons-logo.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Albertsons <br /> Delivery
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://1000logos.net/wp-content/uploads/2021/04/Albertsons-logo.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Albertsons <br /> Delivery
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div><Image style={{ height: "100px", width: "90px" }} src='https://1000logos.net/wp-content/uploads/2021/04/Albertsons-logo.png'></Image>
                            </div>
                            <Card.Text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Albertsons <br /> Delivery
                            </Card.Text>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}