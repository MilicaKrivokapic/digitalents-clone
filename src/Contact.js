import "./Contact.css";
import Map from "./components/Map";
import Form from "./components/Form";
import Staff from "./components/Staff";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const Contact = () => {
  return (
    <div className="content">
      <div className="h-wrapper">
        <h1>Ota yhteyttä</h1>
      </div>
      <div className="rows">
        <div className="column-left">
          <Map />
          <Staff />
        </div>
        <div className="column-right">
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
