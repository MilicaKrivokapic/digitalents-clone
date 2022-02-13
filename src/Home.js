import Hero from "./components/Hero";
import Hovercards from "./components/Hovercards";
import Yhteistyo from "./components/Yhteistyo";
import Hakijalle from "./components/Hakijalle";
import Quote from "./components/Quote";
import Digipoint from "./components/Digipoint";

const Home = () => {
  return (
    <div className="sub-content">
      <Hero />
      <Hovercards />
      <Yhteistyo />
      <Hakijalle />
      <Quote />
      <Digipoint />
    </div>
  );
};

export default Home;
