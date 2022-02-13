import "./Logot.css";
import Logo from "./Logo";

const Logot = () => {
  return (
    <div className="yhteistyo-logo-container">
      <Logo src="metropolia_logo" alt="Metropolia" />
      <Logo src="helsingin_kaupunki_logo" alt="Helsingin kaupunki" />
      <Logo src="kardemummo-logo" alt="Kardemummo" />
      <Logo src="Ohjaamo_Helsinki" alt="Ohjaamo Helsinki" />
      <Logo src="softico" alt="Softico" />
      <Logo src="mostdigital" alt="Most Digital" />
      <Logo src="playmore_games_logo" alt="Playmore Games" />
      <Logo src="kintsugi_logo" alt="Kintsugi" />
    </div>
  );
};
export default Logot;

/* <Logo src="esimerkki-logo" alt="tämä-on-esimerkki" /> 
  drag&drop sekä avif, että png-muotoiset kuvat publicin alla olevaan img-kansioon. Tämän jälkeen lisää kuva ylläolevan esimerkin mukaisesti tähän tiedostoon.
 Tiedosto Logo.js huolehtii siitä, että selain valitsee sen kuvan jota se tukee, tällä hetkellä avif-tuki taitaa olla vain Chromella. */
