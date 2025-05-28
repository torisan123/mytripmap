// src/components/Layout.js
import React from "react";
import ScheduleForm from "./ScheduleForm";
import MyTripMap from "./MyTripMap"; // マップコンポーネントをインポート

const Layout = () => {
    const [markers, setMarkers] = React.useState([]);

    return (
        <div style={{ display: "flex", height: "calc(100vh - 100px)" }}>
            <div style={{ flex: 1, padding: "1rem", overflowY: "auto", backgroundColor: "#f4f4f4" }}>
                <h2>旅行計画</h2>
                <p>地名を入力してピンを追加し、旅行の計画を立てましょう！</p>
                <ScheduleForm setMarkers={setMarkers} />
            </div>
            <div style={{ flex: 2, padding: "1rem" }}>
                <MyTripMap markers={markers} />
            </div>
        </div>
    );
};

export default Layout;