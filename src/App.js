import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import './App.css'; 
import Search from './searchBar.jsx'; 

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '80vh',
};

const App = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
      );
    }
    else {
      console.error('Error in gathering coordinates!');
    }
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDza-zi_w7Y1nQvUbcPFj84fKtXuXyj_fo',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const center = {
    lat: userLocation.latitude,
    lng: userLocation.longitude
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
      <header className = "bar"> 
        <Search />
      </header>
    </div>
  );
};

export default App;