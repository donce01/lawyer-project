import React from "react";
import g3 from "../components/assets/g3.png";

const Section01 = () => {
  return (
    <div id='fillim'>
      <div
        style={{
          backgroundImage: `url(${g3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "90vh",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "250px",
            textShadow: "0 0 0 #f0f8ff",
            fontFamily: "Open Sans",
            fontSize: "68px",
            fontWeight: "600",
          }}
        >
          Avokate: Anila Veizi
        </h1>
        <p style={{ fontSize: "24px", color: "black" }}>
          <span style={{color: 'red', fontSize: '35px'}}>10</span> vite eksperienc ne fushen e avokatise!
        </p>
      </div>
    </div>
  );
};

export default Section01;
