import { useRef, useEffect } from "react";
import { Marker } from "react-leaflet";

const OpenMarker = (props) => {
  const leafletRef = useRef();

  useEffect(() => {
    leafletRef.current.openPopup();
  }, []);

  return <Marker ref={leafletRef} {...props} />;
};

export default OpenMarker;

/*
Tässä käytetty apuna Stack Overflowta
https://stackoverflow.com/questions/38730152/popup-always-open-in-the-marker 
*/
