import "./Hovercards.css";
import Button from "./Button";

const Hovercards = () => {
  return (
    <section className="tiimit" id="tiimit">
      <div className="clouds"></div>
      <h2>Tätä me teemme</h2>
      <div className="hovercards-container" id="tiimit">
        <div className="hovercard" id="card1" aria-hidden>
          <div className="media-image">
            <div className="hover-gradient"></div>
          </div>
          <div className="hovercard-text" id="media" tabIndex="0">
            <div className="hovercard-title">
              <h3> Media </h3>
            </div>
            <p>
              Digitalents Helsingin mediatiimi on osaava asiantuntijajoukko,
              joka tekee mediatuotantoja monipuolisiin tarpeisiin.
            </p>
            <p>
              Työ lähtee tilaajan toiveiden kartoituksesta ja tuotannon
              suunnittelusta. Mietimme yhdessä, mitä ja miten kannattaa tehdä,
              suunnittelemme toteutuksen kalustoineen, työryhmineen ja
              jälkitöineen, sekä laadimme aikataulun.
            </p>
            <p>
              Tiimistä löytyy muun muassa valokuvauksen, äänityön,
              videokuvauksen, animaation, leikkauksen ja graafisen suunnittelun
              osaajia.
            </p>
            <p>
              Olemme toteuttaneet esimerkiksi mainosvideoita, koulutusvideoita,
              haastatteluja, esitteiden taittoa, animaatioita, webinaareja ja
              muita livestreamauksia, sekä valokuvanneet nettiin ja
              painotuotteisiin.
            </p>
            <p>
              Media-alan ammattilaisille Digitalents Helsingin mediatiimi
              tarjoaa hyvän alustan kartuttaa osaamista, solmia kontakteja sekä
              kouluttautua työn ohessa.
            </p>
          </div>
          <div className="hovercard-arrow">
            <i className="bi bi-chevron-up"></i>
          </div>
        </div>
        <div className="hovercard" id="card2" aria-hidden="true">
          <div className="softdev-image">
            <div className="hover-gradient"></div>
          </div>
          <div className="hovercard-text" id="softdev" tabIndex="0">
            <div className="hovercard-title">
              <h3>SoftDev</h3>
            </div>
            <p>
              Digitalents Helsingin SoftDev-tiimi on innovatiivinen joukko
              raudanlujia koodin takomisen tehoseppiä. Toteutamme
              kumppaneillemme niin selainpohjaisia sovelluksia kuin
              mobiiliappeja hyödyntäen moderneja kehitystyökaluja ja
              teknologioita.
            </p>
            <p>
              Täällä et joudu iankaikkiseen putkeen ylläpitämään
              legacy-järjestelmiä, vaan työskentelemään osana tiimiä käyttäen
              alan suosituimpia teknologioita. Projekteja ei koskaan toteuteta
              yksin, vaan pienissä muutaman hengen tiimeissä.
            </p>
            <p>
              Sovelluskehitys toteutetaan moderneilla ketterän
              ohjelmistokehityksen (Agile Software Development) menetelmillä.
              Etsimme erityisesti Node.js-taitajia, React-sankareita,
              JavaScript-velhoja sekä UI/UX-suunnittelijoita.
            </p>
          </div>
          <div className="hovercard-arrow">
            <i className="bi bi-chevron-up"></i>
          </div>
        </div>
        <div className="hovercard" id="card3" aria-hidden="true">
          <div className="ict-image">
            <div className="hover-gradient"></div>
          </div>
          <div className="hovercard-text" id="itc" tabIndex="0">
            <div className="hovercard-title">
              <h3>ICT</h3>
            </div>
            <p>
              Digitalents Helsinki ICT on tiimi, joka lisää työkokemuksen ja
              koulutuksen kautta työntekijöidensä ammattitaitoa ja vastaa siten
              myös yritysten osaajatarpeeseen, sekä toisaalta palvelee
              ICT-tiimin työntekijöiden jatkotyöllistymistä.
            </p>
            <p>
              Tehtävät räätälöidään kiinnostuksen ja osaamisen mukaan.
              Työntekijöille on löytynyt omia erityisalueitaan, joiden osaamista
              he ovat päässeet parantamaan. Tarjolla on erilaisia, ajankohtaisia
              teknologioita. Tekniset ratkaisut tehdään oikeaa käyttöä varten.
              Esimerkkeinä työtehtävistä ovat infrastruktuurin kehittäminen sekä
              lähi- ja etätuki.
            </p>
            <p>
              Tarjolla on muun muassa verkkovirtuooseja, PowerApps-pioneereja,
              tietoturvataitureita, loistavia lähitukihenkilöitä sekä päteviä
              palvelinylläpitäjiä. On runsaasti projektien sekä prosessien
              kehittämisosaamista, ja dokumentointi on aina ammattimaista ja
              ajan tasalla.
            </p>
          </div>
          <div className="hovercard-arrow">
            <i className="bi bi-chevron-up"></i>
          </div>
        </div>
      </div>
      <div className="txt-row">
        <div className="txt-under-hovercard">
          <p>
            Osaamista, mutta ei paikkaa? Vailla töitä? Halua vahvistaa uskoa
            omaan tekemiseen?
          </p>
          <p>
            Digitalents Helsingin tiimeissä työkaverit omistautuvat työlleen ja
            auttavat mielellään. Ihmiset ovat innostuneita ja kannustavia.
            Työympäristö on oppiva, jossa voi rohkeasti kokeilla. Teemme sinusta
            tulevaisuuden innovaattorin.
          </p>
          <p>
            Etsimme jatkuvasti uusia osaajia, sekä kokeneempia, että
            tulevaisuuden talentteja. Olemme helsinkiläisille suunnattu
            urakiihdyttämö, joka tarjoaa sinulle uuden väylän työelämään.
          </p>
        </div>
        <div className="hovercards-nappi-container" tabIndex="-1" aria-disabled>
          <Button color="yellow" aria-label="lue lisää" link="#hakijalle">
            Lue lisää
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hovercards;
