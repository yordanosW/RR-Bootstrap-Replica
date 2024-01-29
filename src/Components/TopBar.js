import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import '../App.css';

export default function TopBar() {
    return (
        <div className='sticky'>
            <Navbar bg="light" expand="lg" style={{ width: "130%" }}>
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="instacart logo" />
                <Form>
                    <Form.Control size="lg" style={{ width: "50vw", margin: "20px" }} type="search-bar" placeholder="Search products and stores" />
                </Form>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn"><b>Log In</b></Nav.Link>
                    <Button style={{ width: "100px", fontWeight: "bolder", borderRadius: "55px" }} variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar>
        </div>
    )
}