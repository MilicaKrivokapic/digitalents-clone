import "./Form.css";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  const [aihe, setAihe] = useState("");
  const [nimi, setNimi] = useState("");
  const [email, setEmail] = useState("");
  const [puh, setPuh] = useState("");
  const [viesti, setViesti] = useState("");

  const [tietosuoja, setTietosuoja] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [notEmail, setNotEmail] = useState(false);

  const handleAihe = (event) => {
    setAihe(event.target.value);
  };
  const handleNimi = (event) => {
    setNimi(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  /* tarkistetaan että kenttään syötetyt valuet ovat numeraalisia tai puhelinnumeroissa yleisellä tasolla käytettyjö merkkejä, tai onko kenttä kokonaan tyhjä.*/
  const handlePuh = (event) => {
    if (/^[\d ()+-]+$/.test(event.target.value) || event.target.value === "") {
      setPuh(event.target.value);
    }
  };
  const handleViesti = (event) => {
    setViesti(event.target.value);
  };
  const handleTietosuoja = (event) => {
    setTietosuoja(event.target.checked);
  };
  /* tarkistetaan että "e" (eli email)parametri on regular expressionsien mukainen. 
  Tämä testi on kopioutu osoitteesta https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript/46181#46181 */
  const validateEmail = (e) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(e).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotEmail(false); /* alustetaan staten tila */
    /* kääritään statejen tilat objektiin JSON:ina lähettämistä varten  */
    const tiedot = {
      nimi: nimi,
      aihe: aihe,
      email: email,
      puhelin: puh,
      viesti: viesti,
    };
    /* mikäli emailissa oleva state ei täytä ylläolevan validatEmailimme tuloksia, vaihdetaan staten tila trueksi, jolloin formin alapäässä oleva vertailuoperaattori napsahtaa päälle jolloin tulostuu viesti, sekä lopetaan handleSubmit-funktion luku return-komennon takia. Mikäli syötetty email taas läpäisee testimme, jatkuu handleSubmitin suoritus normaalisti. */
    if (!validateEmail(email) && email !== "") {
      setNotEmail(true);
      return;
    }
    if (tietosuoja) {
      /* ylempänä tsekataan onko tietosuojaseloste raksittu ja täten state muuttunut */
      fetch(process.env.REACT_APP_APIOSOITE, {
        method: "POST",
        body: JSON.stringify(tiedot),
      }).then((response) => {
        if (response.status === 200) {
          setSuccess(true);
          setFailure(false);
          resetForm();
        } else {
          setFailure(true);
          setSuccess(false);
        }
      });
    }
  };
  const resetForm = () => {
    setAihe("");
    setNimi("");
    setEmail("");
    setPuh("");
    setViesti("");
    setTietosuoja(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="select">
          <select
            aria-label="Aihe"
            className="formi"
            id="subject"
            required=""
            value={aihe}
            onChange={handleAihe}
            name="subject"
          >
            <option disabled="" hidden="" defaultValue="defaultti">
              {/*selected value="defaultti"> */}
              Valitse aihe
            </option>
            <option value="yleinen">Yleinen</option>
            <option value="media">Media</option>
            <option value="ict">ICT</option>
            <option value="softdev">SoftDev</option>
          </select>
        </div>
        <label htmlFor="name">Nimi:</label>
        <input
          aria-label="Nimi"
          className="formi"
          id="name"
          value={nimi}
          onChange={handleNimi}
        />
        <div className="rows" id="formirows">
          <div className="formcolumn">
            <label htmlFor="email">Sähköpostiosoite:</label>
            <p>
              <input
                name="email"
                aria-label="Sähköpostiosoite"
                className="formi"
                id="email"
                value={email}
                onChange={handleEmail}
              />
            </p>
          </div>
          <div className="formcolumn">
            <label htmlFor="nimi">Puhelinnumero:</label>
            <p>
              <input
                name="number"
                aria-label="Puhelinnumero"
                className="formi"
                id="phone"
                value={puh}
                onChange={handlePuh}
              />
            </p>
          </div>
        </div>
        <label htmlFor="nimi">Viesti:</label>
        <p>
          <textarea
            name="text"
            aria-label="Viesti"
            className="formi"
            id="text"
            required
            rows="5"
            value={viesti}
            onChange={handleViesti}
          ></textarea>
        </p>
        <input
          name="checkers"
          aria-hidden="false"
          className="form-check"
          id="dataprocessingconsent"
          required
          type="checkbox"
          checked={tietosuoja}
          onChange={handleTietosuoja}
        />
        <label
          htmlFor="dataprocessingconsent"
          role="checkbox"
          aria-checked
          aria-hidden="false"
        >
          {" "}
          Olen tutustunut{" "}
          <a
            href="https://www.hel.fi/static/liitteet-2019/Kaupunginkanslia/Rekisteriselosteet/Kasko/Asiakas-,%20sidosryhm%C3%A4-%20ja%20markkinointiviestinn%C3%A4n%20rekisteri.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            tietosuojaselosteeseen PDF
          </a>{" "}
          ja hyväksyn henkilötietojeni käsittelyn siinä kuvatulla tavalla.
          <br />
        </label>
        {success && (
          <div className="formSent">Viestin lähetys onnistui! 👍</div>
        )}
        {failure && (
          <div className="formSent notSent">
            Viestin lähetys epäonnistui.👎 Kokeile hetken päästä uudelleen!
          </div>
        )}
        {notEmail && (
          <div className="formSent notSent">Tarkista sähköpostiosoite!</div>
        )}
        <div className="form-nappi-container">
          <Button
            className="button"
            color="black"
            aria-label="lähetä"
            isButton={true}
            style={{ margin: "1rem" }}
          >
            Lähetä
          </Button>
        </div>
      </form>
    </>
  );
};
export default Form;
