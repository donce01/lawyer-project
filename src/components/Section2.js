import ali from "../components/assets/ali.png";
import MediaQuery from 'react-responsive';
import { Fragment } from "react";

const Section2 = () => {


  const url = `//api.whatsapp.com/send?phone=+355675357338&text= Hello I was interested in getting more information about your services?`

  return (
    <Fragment>
    <MediaQuery minDeviceWidth={701}>
    <div style={{ paddingTop: "45px",  }} id='sherbimet'>
      <p style={{ marginLeft: "45px", textAlign: "center", fontSize: '26px' }}>
        <img
          src={ali}
          style={{
            width: "30%",
            height: "30%",
            marginRight: "45px",
            marginLeft: "35px",
            float: "right",
          }}
          alt="soni"
        /><br />
              -Këshilla Ligjore. <br />
              -Hartimin e dokumentave të ndryshme ligjore; <br />
              -Hartimin dhe negocimin e kontratave te ndryshme <br />
              -Leje pune dhe leje qendrimi per shtetasit e huaj <br /> 
              -Hartimin e të gjitha dokumenteve të nevojshme për regjistrimin e
              biznesit në Shqipëri, <br />
              përgatitjen e Rezolutës së Bordit të
              Drejtorëve, Prokurës dhe Dokumenteve; <br />
              -Likujdimin e shoqerise <br />
      </p>
      <h5 style={{ textAlign: "center", fontSize: '24px', color: 'red' }}> 
      <a 
          href={url}
          title="Share on Wp" 
          className="button"
          style={{color: 'red', textDecoration: 'none'}}
          >
          Kontaktoni ne wp: +355675357338
          </a>
          </h5>
      {/* <a 
          href={url}
          title="Share on Wp" 
          className="button"
          >  <br />
          <button style={{marginTop: "15px", fontSize: '24px', fontWeight: 'bold', color: '#8b0000', marginRight: '32px', borderRadius: '35px'}}>
              Shop more in Instagram
          </button></a> */}
    </div>
    </MediaQuery>


    <MediaQuery maxDeviceWidth={700} >
    <div style={{ paddingTop: "35px" }} id='sherbimet'>
      <p style={{ marginLeft: "45px", textAlign: "center" }}>
        <img
          src={ali}
          style={{
            width: "20vh",
            height: "50vh",
            // marginRight: "45px",
            marginLeft: "15px",
            float: "right",
          }}
          alt="soni"
        />
              -Këshilla Ligjore. <br />
              -Hartimin e dokumentave të ndryshme ligjore; <br />
              -Hartimin dhe negocimin e kontratave te ndryshme <br />
              -Leje pune dhe leje qendrimi per shtetasit e huaj <br />
              -Hartimin e të gjitha dokumenteve të nevojshme për regjistrimin e
              përgatitjen e Rezolutës <br />
              -Likujdimin e shoqerise <br />
      </p>
      <h5 style={{ textAlign: "center", fontSize: '24px', color: 'red' }}> 
      <a 
          href={url}
          title="Share on Wp" 
          className="button"
          style={{color: 'red', textDecoration: 'none'}}
          >
          Kontaktoni ne wp: +355675357338
          </a>
          </h5>
    </div>
    </MediaQuery>
    </Fragment>
  );
};

export default Section2;
