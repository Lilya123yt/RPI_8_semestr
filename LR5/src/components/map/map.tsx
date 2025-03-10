import { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

type Offer = {
  id: string;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  city: City;
  offers: Offer[];
};

const Map = ({ city, offers }: MapProps) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city]);

  const customIcon = useMemo(() => {
    return new L.Icon({
    iconUrl: "/img/pin.svg",
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35],
  });
    }, []);

  return (
    <MapContainer
      className="cities__map"
      center={[city.location.latitude, city.location.longitude]}
      zoom={city.location.zoom}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
          icon={customIcon}
        >
          <Popup>{offer.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
