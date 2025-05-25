import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 35.6895,
    lng: 139.6917
}

function Map() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyCkbnpInkfq-2RksWwSSueZhRKxSy7rKEQ">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;