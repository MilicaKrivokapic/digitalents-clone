import "./Quote.css";
const Quote = () => {
  return (
    <section className="dark">
      <div className="dark-container">
        <blockquote className="quote">
          <p>
            Digitalents Helsingin ihanan yhteisön ansiosta olen päässyt taas
            kuorestani ulos, ja monipuolisten työtehtävien ansiosta olen saanut
            kehitettyä sekä taitojani että uskoa omaan tekemiseen.
          </p>
          <img
            src="img/stadin-ao-logo.svg"
            className="helsinki"
            alt="Stadin ammattiopisto logo"
          />
        </blockquote>
        <div className="stadin-ao-container">
          {/* Tässä käytetty vain jpg:iä, koska kuvan tummat alueet mössääntyvät pakkauksessa  avifina */}
          <img src="img/v8a9697.jpg" alt="ihmisiä studiossa" />
        </div>
      </div>
    </section>
  );
};
export default Quote;
