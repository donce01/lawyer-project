// import { Link } from 'react-router-dom';
import React from "react";
import "./Foter.css";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

function Footer1() {
  return (
    <div>
      <footer>
        <div id="kontakti" className="container" style={{ paddingTop: "60px" }}>
          <div className="row">
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Sherbimet</span>
                </li>
                <li className="nav-item">
                  <a
                    href="#sherbimet1"
                  >
                    Sherbim 1
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sherbimet1"
                  >
                    Sherbim 2
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sherbimet1"
                  >
                    Sherbim 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Company</span>
                  {/* <FaRegHeart /> */}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#nila"
                  >
                    Rreth Meje
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sherbimet"
                  >
                    Sherbimet
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#ceshtjet"
                  >
                    Ceshtjet
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title">Contact & Support</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <i className="fas fa-phone"></i>+355675357338
                  </span>
                </li>
                <li className="nav-item">
                <a
              href="//api.whatsapp.com/send?phone=+355675357338&text= Pershendetje, Po ju shkruaj pasi isha i/e interesuar per nje/disa nga sherbimet tuaja. Faleminderit!"
              title="Share on Wp"
              className="button"
              style={{ color: "#0d6efd", textDecoration: "none", fontSize: '16px'}}
            >
                    <i className="fas fa-envelope"></i>Kontaktoni
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/"
                  >
                    {/* <i className="fas fa-star"></i>Give feedback */}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="row text-center">
            <div className="col-md-4 box">
            </div>
            <div className="col-md-4 box">
              <ul className="list-inline social-buttons">
                <span className="copyright quick-links">
                  Copyright &copy; Anila Veizi 2023
                </span>
              </ul>
            </div>
            <div className="col-md-4 box">
              <ul className="list-inline quick-links">
                <li className="list-inline-item">
                  <a href="https://www.privacypolicies.com/live/67109e6d-ec92-4a6b-abf9-a7ea72081686">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.privacypolicies.com/live/67109e6d-ec92-4a6b-abf9-a7ea72081686">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer1;