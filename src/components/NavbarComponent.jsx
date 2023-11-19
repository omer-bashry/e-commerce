/* eslint-disable no-unused-vars */
// mui
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// react route
import { Link } from "react-router-dom";

// bootstrab
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="text-bold">
          <h2>WINKEL</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-2">
            <NavLink>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </NavLink>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Shop"
                >
                  Shop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/SingleProduct"
                >
                  Single Product
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/ComingSoon"
                >
                  Coming Soon
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Login"
                >
                  Login
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Cart"
              >
                Cart
              </Link>
            </Nav.Link>
            <NavLink>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Blogs"
              >
                Blogs
              </Link>
            </NavLink>
            <NavLink>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Contact"
              >
                Contact
              </Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav.Link href="#">
            <ShoppingCartIcon />
            <span>[0]</span>
          </Nav.Link>
          <Nav.Link href="#">
            <FavoriteBorderIcon />
            <span>[0]</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
