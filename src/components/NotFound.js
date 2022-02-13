import Nav from "./Nav";
import "./NotFound.css";
import Button from "./Button";
const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="errorMessage">
        404 - Sivua ei löytynyt
        <Button
          color="yellow"
          link="/"
          aria-label="Etusivulle"
          style={{ marginTop: "3rem" }}
        >
          Etusivulle
        </Button>
      </div>
    </>
  );
};

export default NotFound;
