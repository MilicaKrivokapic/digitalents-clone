import "./Digipoint.css";
import Button from "./Button";
const Digipoint = () => {
  return (
    <>
      <section className="digipoint" id="otayhteytta">
        <div className="digipoint-container">
          <div className="digipoint-text">
            <h2 id="digipointHeading">DigiPoint</h2>
            <p>
              6Aika DigiPoint-hankkeen yhteisenä tavoitteena on kehittää ja
              tarjota sujuvia väyliä työelämään ja koulutukseen. Digitalents
              Helsinki ja Metropolia AMK muodostavat hankkeen sisällä oman
              kokonaisuutensta.
            </p>
            <p>
              Digitalents Helsinki kehittää yhdessä Metropolian kanssa joustavaa
              koulutusmallia, jossa yksilöllinen osaamisen kehittäminen ja
              sosiaalinen vahvistaminen nivoutuvat luontevaksi osaksi
              päivittäistä työtä.
            </p>
            <p>
              Lisätietoa hankkeesta:{" "}
              <a
                className="digipoint-txt-link"
                href="https://6aika.fi/project/digipoint/"
              >
                https://6aika.fi/project/digipoint/
              </a>
            </p>
          </div>
          <div className="digipoint-logot">
            <picture>
              <source srcSet="img/6aika.avif" type="image/avif" />
              <img src="img/6aika.png" type="image/png" alt="6aika" />
            </picture>
            <picture>
              <source
                srcSet="img/eu-esr-fi-vertical-20mm-rgb-mv.avif"
                type="image/avif"
              />
              <img
                src="img/eu-esr-fi-vertical-20mm-rgb-mv.png"
                type="image/png"
                alt="Euroopan Unioni, Euroopan sosiaalirahasto"
              />
            </picture>
            <picture>
              <source srcSet="img/vipuvoimaaeulta.avif" type="image/avif" />
              <img
                src="img/vipuvoimaaeulta.png"
                type="image/png"
                alt="vipuvoimaa EU:lta"
              />
            </picture>
          </div>
        </div>
      </section>
      <div className="digipoint-nappi-container" tabIndex="-1" aria-disabled>
        <Button color="black" link="/contact">
          Ota yhteyttä
        </Button>
      </div>
    </>
  );
};
export default Digipoint;
