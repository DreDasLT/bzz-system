import React, { useEffect, useState } from 'react';
import { LatLngTuple, Icon } from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const zoom = 16;

  const [coords, setCoords] = useState<LatLngTuple>([0, 0]);

  const getLocation = () => {
    if (navigator.geolocation) {
      console.log('iskviete');
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setCoords([position.coords.latitude, position.coords.longitude]);
      });
    }
  };

  useEffect(() => {
    getLocation()
  }, [])

  let icon = new Icon({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

  return (
    <>
      <Map
        center={coords}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={coords} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </>
  );
};

export default MapView;
