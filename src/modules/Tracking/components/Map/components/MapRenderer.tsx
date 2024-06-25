import L from "leaflet"; //core leaflet library
import "leaflet/dist/leaflet.css";
import { FC, forwardRef, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";
import DriverTooltip from "./EngineerTooltip";
import EngineerAvatar from "/images/businessman_avatar.png";
import { locationTypes } from "../../../tracking.types";
import { engineerData } from "../../../tracking.constants";

const MapController = ({ location }: { location: locationTypes | null }) => {
  const map = useMap();

  const flyTo = (location: any) => {
    map.flyTo(location, 15, {
      animate: true,
      duration: 2,
    });
  };

  useEffect(() => {
    if (location) {
      flyTo(location);
    }
  }, [JSON.stringify(location)]);

  return null;
};

const customIcon = L.icon({
  iconUrl: EngineerAvatar, // URL of the custom icon image
  iconSize: [60, 60], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

function MapRenderer({ location }: { location: locationTypes | null }) {
  return (
    <>
      <MapContainer
        center={[19.21833, 72.978088]}
        zoom={15}
        maxZoom={17}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{
          height: `calc(100vh - 68px)`,
        }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomright" />
        <MapController location={location} />

        {engineerData.map((value) => {
          return (
            <Marker position={[value.latitude, value.longitude]} icon={customIcon}>
              <Popup>
                <DriverTooltip />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}

export default MapRenderer;
