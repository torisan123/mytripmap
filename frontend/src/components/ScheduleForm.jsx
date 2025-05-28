// src/components/ScheduleForm.js
import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const ScheduleForm = ({ setMarkers }) => {
    // API読み込み
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const [schedule, setSchedule] = useState({
        date: "",
        from: "",
        to: "",
        departTime: "",
        arriveTime: "",
        transport: "",
        cost: ""
    });

    const handleChange = (e) => {
        setSchedule({ ...schedule, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("入力されたスケジュール:", schedule);

        const geocoder = new window.google.maps.Geocoder();
        
        // Geocoderで住所から緯度経度に変換してmarkersへ追加
        geocoder.geocode({ address: schedule.from }, (resultsFrom, statusFrom) => {
            if (statusFrom === "OK" && resultsFrom[0]) {
                const locationFrom = resultsFrom[0].geometry.location;
                setMarkers((prev) => [
                ...prev,
                { lat: locationFrom.lat(), lng: locationFrom.lng(), title: schedule.from },
                ]);
            } else {
                alert("住所の検索に失敗しました。もう一度試してください。");
            }
        });

        geocoder.geocode({ address: schedule.to }, (resultsTo, statusTo) => {
            if (statusTo === "OK" && resultsTo[0]) {
                const locationTo = resultsTo[0].geometry.location;
                setMarkers((prev) => [
                    ...prev,
                    { lat: locationTo.lat(), lng: locationTo.lng(), title: schedule.to },
                ]);
            } else {
                alert("住所の検索に失敗しました。もう一度試してください。");
            }
        });
    };

    if (!isLoaded) return <div>Loading...</div>;

    return(
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h2>スケジュール入力</h2>
            <input type="date" name="date" value={schedule.date} onChange={handleChange} required />
            <input type="text" name="from" value={schedule.from} onChange={handleChange} placeholder="出発地" required />
            <input type="text" name="to" value={schedule.to} onChange={handleChange} placeholder="目的地" required />
            <input type="time" name="departTime" value={schedule.departTime} onChange={handleChange} placeholder="出発時間" required />
            <input type="time" name="arriveTime" value={schedule.arriveTime} onChange={handleChange} placeholder="到着時間" required />
            <input type="text" name="transport" value={schedule.transport} onChange={handleChange} placeholder="交通手段" required />
            <input type="number" name="cost" value={schedule.cost} onChange={handleChange} placeholder="費用" required />
            <button type="submit">登録</button>
        </form>
    );
};

export default ScheduleForm;