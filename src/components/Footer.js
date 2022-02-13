import "./Footer.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footerlogo">
          <picture>
            <source srcSet="img/dt_footer.avif" type="image/avif" />
            <img
              src="img/dt_footer.png"
              type="image/png"
              alt="Digitalents Helsinki"
            />
          </picture>
        </div>
        <div className="footer-socialmedia">
          <p>
            <i className="bi bi-facebook"></i>
            <a href="https://www.facebook.com/digitalentshelsinki">Facebook</a>
          </p>
          <p>
            <i className="bi bi-instagram"></i>
            <a href="https://www.instagram.com/digitalentshelsinki/">
              Instagram
            </a>
          </p>
          <p>
            <i className="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/company/digitalents-helsinki/">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="footer-locations">
          <ul>
            <li>
              <p>
                <strong>Core, ICT, SoftDev</strong>
              </p>
              <p>Myllypurontie 1 C</p>
              <p>00920 Helsinki</p>
              <p className="padding-li">
                <strong>Media</strong>
              </p>
              <p>Muotoilijankatu 3</p>
              <p>00560 Helsinki</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
