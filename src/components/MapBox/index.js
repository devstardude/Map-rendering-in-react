import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "./style.css";

const MapBox = (props) => {
  const ChangeMapView = ({ coords }) => {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  };

  const position = [props.coordinates.lat, props.coordinates.lon];
  return (
    <div className="MapBoxContainer d-flex justify-content-center mt-3 ">
      <div className="MapBoxDiv ">
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={position} />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapBox;
