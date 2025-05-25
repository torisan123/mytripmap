import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -15.769731249813606,
    lng: -47.979260003588045
}

const Map = () => {
    const [destinations, setDestinations] = useState([
        { id: 1, name: 'レンソイス・マラニャンセス国立公園', lat: -2.5276945169109597, lng: -43.02696388964509}
    ]);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
            >
                {destinations.map((place) => (
                    <Marker key={place.id} position={{ lat:place.lat, lng:place.lng}} />                    
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;