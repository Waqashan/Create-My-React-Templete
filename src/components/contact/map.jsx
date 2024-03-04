import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Map = () => {
  const [position, setPosition] = useState([48.8566, 2.3522]);



  return (
    <div className="map">
      <MapContainer
        center={{ lat: position[0], lng: position[1] }}
        zoom={13}
        style={{ maxHeight:"400px",height:"400px"}}

      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{ lat: position[0], lng: position[1] }}
          draggable={true}
         
        >
          <Popup>
            Latitude: {position[0]}, Longitude: {position[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
