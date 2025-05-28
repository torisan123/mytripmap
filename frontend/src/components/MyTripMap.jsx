// src/MyTripMap.js
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// マップのスタイルと・初期中心位置を定義
const containerStyle = { width: "100%", height: "80vh" };
const center = { lat: -8.585744166561874, lng: -56.193057748644115 };

// MyTripMapコンポーネント
function MyTripMap({ markers }) {
  // API読み込み
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  // 住所入力欄と「ピンを追加」ボタン、GoogleMapを表示
  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
        {markers.map((marker, idx) => (
          <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default MyTripMap;
