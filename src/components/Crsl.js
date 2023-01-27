import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Fragment } from "react";

function Doni() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={701}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "700px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-block"
              src="https://www.reporter.al/manualidrejtesise/assets/img/grafika1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Gjykata e larte e Apelit</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "700px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-block"
              src="https://thedefenders.net/wp-content/uploads/2020/02/Do-I-need-a-Lawyer-to-Represent-Me-In-Court.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Ne sallen e gjyqit</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "700px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-block"
              src="https://www.totallylegal.com/getasset/c3ee2a89-b973-445f-9337-1ca05736c950/"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Zgjedhim cdo ceshtje gjyqesore</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={700}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
                // marginTop: "100px",
              }}
              className="d-block"
              src="https://www.reporter.al/manualidrejtesise/assets/img/grafika1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Gjykata e larte e Apelit</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-block"
              src="https://thedefenders.net/wp-content/uploads/2020/02/Do-I-need-a-Lawyer-to-Represent-Me-In-Court.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Ne sallen e gjyqit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-block"
              src="https://www.totallylegal.com/getasset/c3ee2a89-b973-445f-9337-1ca05736c950/"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Zgjedhim cdo ceshtje gjyqesore</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </MediaQuery>
    </Fragment>
  );
}


function Crsl() {

  let count = window.innerWidth.int;

  return (
    <div id="ceshtjet" style={{ }}>
      
      <hr
        style={{
          width: count < 701 ? '50%' : '100%',
          height: "1px",
          color: "#ed1d61",
          background: "#ed1d61",
          fontSize: "0",
          border: "0",
          // width: "50%",
          marginTop: "95px",
        }}
      />

      <div style={{ margin: "auto", width: "80%", paddingTop: "35px" }}>
        <h3
          style={{ paddingBottom: "5px", marginTop: "5px", textAlign: "end" }}
        >
          Pse NE ?!
        </h3>
        <Doni />
      </div>
    </div>
  );
}

export default Crsl;
