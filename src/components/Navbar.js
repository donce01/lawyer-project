import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";

function Navbar1() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    document.getElementById("navbar").scrollIntoView();
  }, []);

  return (
    <Navbar
      className={`${sticky ? "sticky" : ""}`}
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        background: "linear-gradient(to right, blue ,lightblue)",
        boxShadow: "0px 5px 18px rgba(0,0,0,0.6)",
        top: "0px",
        zIndex: "300",
        position: "sticky",
      }}
    >
      <Container>
        <Navbar.Brand href="#">Anila Veizi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sherbimet">Sherbimet</Nav.Link>
            <Nav.Link href="#ceshtjet">Ceshtjet</Nav.Link>
            <Nav.Link href="#nila">Mesoni rreth meje</Nav.Link>
          </Nav>
          <Nav>
            <a
              href="//api.whatsapp.com/send?phone=+355675357338&text= Pershendetje, Po ju shkruaj pasi isha i/e interesuar per nje/disa nga sherbimet tuaja. Faleminderit!"
              title="Share on Wp"
              className="button"
              style={{ color: "black", textDecoration: "none", fontSize: '20px' }}
            >
              Kontaktoni
              {/* <Nav.Link></Nav.Link> */}
            </a>
            {/* <Nav.Link eventKey={2} href="#memes">
              Soni
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
