import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Para solucionar problemas de íconos en React
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
  const [position, setPosition] = useState([21.88234, -102.28259]);  // Coordenadas iniciales
  const [error, setError] = useState(null);  // Estado para manejar errores

  // Función para obtener la ubicación actual del usuario
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);  // Actualizar la posición con las coordenadas del usuario
          setError(null);  // Limpiar errores
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("El usuario negó el permiso de Geolocalización.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("La información de ubicación no está disponible.");
              break;
            case error.TIMEOUT:
              setError("La solicitud para obtener la ubicación expiró.");
              break;
            default:
              setError("Ocurrió un error desconocido.");
              break;
          }
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={getCurrentLocation}>
        Obtener mi ubicación
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Mostrar error si ocurre */}
      <MapContainer center={position} zoom={13} style={{ height: "500px", width: "700px", margin: 'auto', marginTop: "10px", marginBottom: "30px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            {error ? "Error en la ubicación" : "Tu ubicación actual."}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
