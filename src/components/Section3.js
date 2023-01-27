import Accordion from "react-bootstrap/Accordion";

function Section3() {
  return (
    <Accordion
      defaultActiveKey="0"
      style={{
        margin: "auto",
        marginTop: "55px",
        marginBottom: "75px",
        width: "80%",
        padding: "10px",
      }}
    >
      <h6>Klikoni per te marre me shume informacion per cdo pune</h6>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          DËSHMI PENALITETI NGA SHTETI ITALIAN PËR PËRDORIM NDËRKOMBËTAR
        </Accordion.Header>
        <Accordion.Body>
          Shtetasit shqiptare që aplikojnë për procedura bashkimi familjar apo
          aplikimi fitim shtetesie në një shtet tjetër, kur rezulton që për një
          periudhe kohë ka jetuar edhe në shtetin italian, ndodh t'u kerkohet
          nga ambasada dëshmi penaliteti dhe vërtetim nga prokuroria italiane që
          nuk ka dënim dhe ndjekje penale në emër të aplikantit. Të gjithë të
          interesuarit për dëshmi penaliteti dhe vërtetim nga prokuroria e
          shtetit italian mund të na kontaktojnë ☎+355675357338 <br /> Shërbimi
          ofrohet në kohë rekord dhe dokumenti është i formës së kërkuar konform
          aplikimit tuaj.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Ofrojme asistencë, konsulence ligjore dhe perfaqesim ne organet e
          policise
        </Accordion.Header>
        <Accordion.Body>
          ♦Ofrojme asistencë, konsulence ligjore dhe perfaqesim ne organet e
          policise, prokurorise dhe gjykates per ceshtjet e natyres penale ne
          cdo faze te procesit penal duke filluar që nga momentet e para të
          ndjekjes penale, ndalimit , arrestimit, gjatë fazës se marrjes ne
          pyetje, caktimit te mases se sigurimit si dhe gjate gjykimit të
          cështjes penale ne gjykatë deri ne përfundimin e saj. <br /> ♦Ju
          asistojme dhe përfaqësojme ne çështjet që lidhen me kërkesat per ulje
          dënimi , lirim me kusht , falje , pezullim te ekzekutimit te denimit
          dhe vënien ne prove, parashkrim te ekzekutimit te denimit, kompensim
          per burgim te padrejte etj. <br /> ♦Asistojme ne perpilimin e
          kallezimeve penale per personat viktime e nje vepre penale dhe
          kerkesa, ankesa te tjera te cdo lloji. Mund te na kontaktoni ne nr
          +355675357338
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Sherbime te tjera</Accordion.Header>
        <Accordion.Body>
          Per cdo problematike ne zonen Schengen, Europe, ofrojme sherbime te
          tilla si: <br /> ▶️ Verifikim <br /> ▶️Fshirje Ekspulsesh/ Deportime <br /> ▶️Vërtetim per
          kalimin e kufirit shqiptar etj. <br /> Nese perfshiheni ne nje nga rastet me
          siper, mund te me kontaktoni. Per klientet nga rrethet , ose qe jane
          te pamundur gjate orarit zyrtar , sherbehet dhe diten e shtune dhe te
          diele, duke caktuar orar paraprakisht.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Section3;
