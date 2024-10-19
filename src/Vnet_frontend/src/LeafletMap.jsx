import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import L from 'leaflet';

const PUNTOS_ZONAS = {
    "Centro": [21.8842637, -102.3134514],
    "San Marcos Barrio": [21.8818817, -102.3122746],
    "Américas Las Fracc.": [21.8173776, -102.1151153],
    "Municipio Libre Fracc.": [21.8954463, -102.2689912],
    "Haciendas de Aguascalientes Fracc.": [21.8883146, -102.2533752],
    "Morelos I Fracc.": [21.8559395, -102.269382],
    "Gremial Col.": [21.8953131, -102.2984856],
    "Ojocaliente I Fracc.": [21.8851666, -102.2591437],
    "Flores Las Col.": [21.8965786, -102.2835921],
    "Pilar Blanco Infonavit": [21.8501643, -102.3074635],
    "San Cayetano Fracc.": [21.8989515, -102.3144822],
    "Insurgentes Col. (Las Huertas)": [21.851145, -102.315225],
    "Guadalupe de Barrio": [21.8860278, -102.3089169],
    "Morelos Infonavit": [21.862874, -102.2654909],
    "Circunvalación Norte Fracc.": [21.8992303, -102.3053105],
    "San Marcos Col.": [21.8787032, -102.3307405],
    "Rodolfo Landeros Fracc.": [21.9015364, -102.2580932],
    "Obraje Col.": [21.8734586, -102.3032229],
    "Santa Anita 1era Secc. Fracc.": [21.896521, -102.2824202],
    "Trabajo del Col.": [21.8696268, -102.2471416],
    "José Guadalupe Peralta Fracc.": [21.8695216, -102.2423444],
    "Dorado El 1era Secc. Fracc.": [21.8615633, -102.3105411],
    "Purísima La Barrio": [21.8837164, -102.2900327],
    "Ojocaliente III Fracc.": [21.8783716, -102.2513738],
    "Colinas del Río Fracc.": [21.8952314, -102.3261915],
    "España Fracc.": [21.8655335, -102.316369],
    "Industrial Col.": [21.896001, -102.2994408],
    "Arboledas Las Fracc.": [21.962825, -102.305393],
    "Villas de Ntra. Sra. de la Asunción Sec Estacion Fracc.": [21.9287349, -102.2689383],
    "Bosques del Prado Sur Fracc.": [21.9172782, -102.3142545]
};

const MyMap = () => {
    const [position, setPosition] = useState([21.88234, -102.28259]);
    const [map, setMap] = useState(null);
    const [destination, setDestination] = useState(null);
    const [isSettingDestination, setIsSettingDestination] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error al obtener la ubicación: ", error);
                }
            );
        } else {
            console.error("Geolocalización no es soportada por este navegador.");
        }
    }, []);

    useEffect(() => {
        if (isSettingDestination && map) {
            const handleClick = (e) => {
                const selectedPosition = [e.latlng.lat, e.latlng.lng];
                L.Routing.control({
                    waypoints: [
                        L.latLng(position[0], position[1]),
                        L.latLng(selectedPosition[0], selectedPosition[1])
                    ]
                }).addTo(map);
                setDestination(selectedPosition);
                setIsSettingDestination(false);
            };
            map.on('click', handleClick);
            return () => {
                map.off('click', handleClick);
            };
        }
    }, [isSettingDestination, map, position]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        const coordinates = PUNTOS_ZONAS[searchValue];
        if (coordinates) {
            L.marker(coordinates).addTo(map)
                .bindPopup(`Ubicación: ${searchValue}`)
                .openPopup();
            L.Routing.control({
                waypoints: [
                    L.latLng(position[0], position[1]),
                    L.latLng(coordinates[0], coordinates[1])
                ]
            }).addTo(map);
        } else {
            alert('Ubicación no encontrada');
        }
    };

    return (
        <div>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100vh', width: '100%' }}
                whenCreated={setMap}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Estás aquí.</Popup>
                </Marker>
            </MapContainer>
            <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Introduce la colonia" />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default MyMap;
