import "./Button.css";
const Button = ({ color, style, children, link, isButton }) => {
  if (isButton) {
    return (
      <button className={`nappi ${color}`} style={style}>
        {children}
      </button>
    );
  }
  return (
    <a href={link} className={`nappi ${color}`} style={style}>
      {children}
    </a>
  );
};

export default Button;

/* Button- komponentti ottaa proppeina sisään värin, tyylin, napissa lukevan tekstin, 
ja tarkistaa onko button-komponentti linkki vai button. 
Mikäli se on button, tuotetaan button-komponentti,
ja mikäli meillä on linkki joka näyttää buttonilta, kiedomme komponentin a-tagin sisään.
 */
