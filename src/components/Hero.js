import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="info">
      <div className="bannerimage"></div>
      <div className="hero-background">
        <div className="text">
          <p>
            Digitalents Helsinki on ammattilaisten innovatiivinen työyhteisö,
            joka tarjoaa digitaalisia palveluita yrityksille ja yhteisöille.
          </p>
          <p>
            Tarjoamme alan ammattilaisille mahdollisuuden ylläpitää ja päivittää
            ammatillista osaamistaan, tukea urakehitykseen, sekä ohjausta
            jatko-opintoihin ja työllistymiseen.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
