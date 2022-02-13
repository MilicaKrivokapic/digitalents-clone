import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import OpenMarker from "./OpenMarker";
const Map = () => {
  let DefaultIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <>
      <MapContainer
        center={[60.21722445, 25.02822109]}
        zoom={11}
        scrollWheelZoom={false}
      >
        {/* Tässä käytetty Helsingin omia map tileja */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png"
        />
        <OpenMarker position={[60.21109007548882, 24.978410121757662]}>
          <Popup autoClose={false}>
            <strong>
              Media <br />
            </strong>
            Muotoilijankatu 3 <br />
            00560 Helsinki
          </Popup>
        </OpenMarker>
        <OpenMarker position={[60.22335881718761, 25.078032053814464]}>
          <Popup autoClose={false}>
            <strong>Core, ICT, SoftDev </strong>
            <br />
            Myllypurontie 1 C <br />
            00920 Helsinki
          </Popup>
        </OpenMarker>
      </MapContainer>
    </>
  );
};

export default Map;
