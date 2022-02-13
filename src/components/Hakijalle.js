import "./Hakijalle.css";
const Hakijalle = () => {
  return (
    <section className="hakijalle-container" id="hakijalle">
      <div className="hakijalle">
        <h2 id="h2column">
          <span>Hakijalle</span>
        </h2>
        <div className="hakija-wrapper">
          <picture>
            <source
              srcSet="img/digitalents-sarjis-print-suomenlinna.avif"
              type="image/avif"
            />
            <img
              src="img/digitalents-sarjis-print-suomenlinna.png"
              className="Comic"
              type="image/png"
              alt="Ohjeita Digitalents Helsinkiin hakevalle"
              aria-label="Miten Digitalents Helsinkiin pääsee? 
              Jos sinulla on palkkatukioikeus, ja hallussasi on taitoja joko sovellus-kehityksestä, media-alalta tai ICT:n osaamisalueelta.
              Hakuprosessissa sinua voivat auttaa ainakin TE-Palvelut, Ohjaamo, TYP ja Urapalvelut. Hakiessasi Digitalentsille palkkatukityöllistetyksi liitä hakemuksen oheen myös CV ja työnäytteitä.
              Odota että Digitalents ottaa sinuun yhteyttä. Mikäli pääsit etenemään hakuprosessissa saat kutsun työhaastatteluun.
              Sen jälkeen toivotammekin sinut sydämellisesti tervetulleiksi Digitalents Helsinkiin töihin!"
            />
          </picture>
          <div className="hakijalle-txt">
            <span>Helsingin kaupungin palkkatuen kohderyhmät:</span>
            <p>
              <strong>
                Ammattiin valmistuneet tai tutkinnon suorittaneet alle
                30-vuotiaat.
              </strong>{" "}
              Alle 25-vuotiailta edellytetään 6 kk ja 25–29-vuotiailta 12 kk
              työttömyyttä. Työsuhteen kesto 8 kk.
            </p>
            <p>
              <strong>
                Vähintään 300 päivää työttömyyden perusteella maksettua
                työmarkkinatukea saaneet.
              </strong>{" "}
              Työsuhteen kesto 8 kk.
            </p>
            <p>
              <strong>Velvoitetyöllistettävät.</strong> 57-vuotiaat ja yli.
              Työsuhteen kesto 6 kk.
            </p>
            <span>
              Tarkistamme myös palkkatukijaksot, ja osassa kaupungin kohderyhmiä
              tulee olla kulunut vähintään kaksi vuotta edellisestä jaksosta.
            </span>
            <span>
              Kohderyhmiin kuuluvien tulee olla työttömiä helsinkiläisiä.
            </span>
            <div className="line"></div>
            <div>
              Oletko 17-29 vuotias, vielä ohjelmointi polkusi alussa oleva
              koodari tai päivitystä osaamisesi tarvitseva web-kehittäjä?
              Tutustu yhteistyökumppanimme Stadin AO:n Nuorten työpajojen
              järjestämään työkokeiluun{" "}
              <a
                className="academy-link"
                href="https://stadinao.fi/nuorten-tyopajat/digitalents-academy-web-suunnittelusta-kiinnostuneille/"
              >
                Digitalents Academyllä
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hakijalle;
