import React, { Fragment, useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MediaQuery from "react-responsive";
import edisoni from '../components/assets/edisoni.jpg'

// import t1 from "../components/assets/t1.png";
// import t2 from "../components/assets/t2.png";
// import t3 from "../components/assets/t3.png";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={701}>
        <div style={{ textAlign: "center" }} id='nila'>
          <h3 style={{ textAlign: "center" }}>Kush eshte Anila Veizi!</h3>
          <h6 style={{ color: "red" }}>
            Kliko imazhin per me shume informacion
          </h6>
          <div>
            {/* <Button
            variant="primary"
            onClick={handleShow}
            style={{ color: "red", fontSize: " 24px" }}
          >
            Kliko
          </Button> */}
            <p
              style={{
                marginLeft: "25px",
                textAlign: "center",
                fontSize: "20px",
                width: "80%",
              }}
            >
              <img
                onClick={handleShow}
                // src="https://content.presentermedia.com/content/clipart/00015000/15002/businessman_silhouette_pocket_300_nwm.jpg"
                src={edisoni}
                style={{
                  width: "400px",
                  height: "400px",
                  cursor: "pointer",
                  float: "left",
                  paddingBottom: '15px',
                  paddingRight: '15px',
                  borderRadius: '35px'
                  // marginLeft: "230px",
                  // marginRight: '45px',
                  // paddingBottom: "50px",
                  
                }}
                alt="kliko figuren"
              />
              Autobiografi <br />
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc. Some text as
              placeholder. In real life you can have the elements you have
              chosen. Like, text, images, lists, etc. Some text as placeholder.
              In real life you can have the elements you have chosen. Like,
              text, images, lists, etc. Some text as placeholder. In real life
              you can have the elements you have chosen. Like, images, lists,
              etc. placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc. Some text as
                placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc.
            </p>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Anila Veizi</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h3 style={{textAlign: 'end', paddingRight: '25px', paddingBottom: '15px'}}>Autobiografi</h3>
                <img src={edisoni} style={{width: '350px', height: '350px', borderRadius: '55px', }} alt='soni' />
                
                <h5 style={{paddingTop: '25px'}}>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc. Some text as
                placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc. Some text as
                placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc. 
                </h5>
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          {/* <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}> */}
          {/* <div>
        <img src='https://img.freepik.com/free-photo/portrait-smart-professional-african-american-man-standing-with-hands-crossed-chest-confident-pose_176420-33861.jpg' style={{width: '250px', height: '250px'}} alt='avokate'></img>      
        <img src={t1} style={{width: '250px', height: '250px'}} alt='avokate'></img>
        </h5>
      <img src={t3} style={{width: '250px', height: '250px'}} alt='avokate'></img>
    </div>
    </div> */}
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={700}>
      <div style={{ textAlign: "center" }} id='nila'>
          <h3 style={{ textAlign: "center" }}>Kush eshte Anila Veizi!</h3>
          <h6 style={{ color: "red" }}>
            Kliko imazhin per me shume informacion
          </h6>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: "center", justifyContent: 'center' }}>
          <img
                onClick={handleShow}
                // src="https://content.presentermedia.com/content/clipart/00015000/15002/businessman_silhouette_pocket_300_nwm.jpg"
                src={edisoni}
                style={{
                  // display: 'flex',
                  // justifyContent: 'center',
                  width: "100vw",
                  padding: '15px 15px',
                  height: "40vh",
                  cursor: "pointer",
                  borderRadius: '35px',
                  paddingBottom: "5px",
                }}
                alt="kliko figuren"
              />
            <p
              style={{
                // marginLeft: "-65px",
                textAlign: "center",
                fontSize: "18px",
                width: "100%",
              }}
            >
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc. Some text as
              placeholder. In real life you can have the elements you have
              chosen. Like, text, images, lists, etc. 
              </p>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Anila Veizi</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <h3 style={{textAlign: 'end', paddingBottom: '15px'}}>Autobiografi</h3>
                <img src={edisoni} style={{
                  width: "100vw",
                  paddingRight: '30px',
                  height: "40vh",
                  cursor: "pointer",
                  // borderRadius: '35px',
                  paddingBottom: "5px",
                  }} alt='soni' />
                
                <h5 style={{paddingTop: '25px'}}>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc. Some text as
                placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc. Some text as
                placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc. 
                </h5>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          </div>
        </MediaQuery>
    </Fragment>
  );
}

export default Example;
