import "./Yhteistyo.css";
import Button from "./Button";
import Logot from "./Logot";

const Yhteistyo = () => {
  return (
    <section className="yhteistyo" id="yhteistyo">
      <h2 id="yhteistyo-otsikko">Yhteistyökumppaneille</h2>
      <div className="yhteistyowrapper">
        <div className="yhteistyokuva"></div>
        <div className="yhteistyoteksti">
          <p>
            Tarjoamme yhteistyökumppaneillemme täyden palvelun digitoimiston.
            Olemme tehneet asiakkaillemme esimerkiksi mainoskampanjoita,
            sovelluksia sote-maailmaan, sekä rakentaneet ICT-infrastruktuuria.
          </p>
          <p>
            Tule rohkeasti esittelemään yrityksenne ja katsotaan miten voimme
            olla avuksi!
          </p>
          <div
            className="yhteistyo-nappi-container"
            tabIndex="-1"
            aria-disabled
          >
            <Button
              color="yellow"
              link="/contact"
              aria-label="Ota yhteyttä"
              style={{ width: "13rem" }}
            >
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>
      <Logot />
    </section>
  );
};
export default Yhteistyo;
