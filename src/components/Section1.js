
const Marque = () => {
    return (
        <div style={{paddingTop: '25px'}}>
    <div>
    <section id="hire">
        <div className="container-fluid">
            <div className="jumbotron jumbotron-fluid">
               <div className="container hir" >
                   <marquee direction="left">
                    <h1 className="display-3" >
                        <img src="data:image/png;base64,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" alt="chef" />  


                        Kontaktoni per te marr leje qendrimi : +355675357338 ! 




                        <img src="data:image/png;base64,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" alt="kuvend" />
                    </h1>
                    </marquee>         
               </div>
           </div>
        </div>
    </section>
    </div>
        </div>
    )
};

export default Marque;