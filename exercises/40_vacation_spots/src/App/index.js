import React from "react";
import VacationSpots from "./VacationSpots";
import "./index.css";

function App() {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: "$40",
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: "$900",
            timeToGo: "Winter"
        }, {
            place: "China",
            price: "$1200",
            timeToGo: "Fall"
        }, {
            place: "Russia",
            price: "$1100",
            timeToGo: "Summer"
        }, {
            place: "Lebanon",
            price: "$400",
            timeToGo: "Spring"
        }
    ];

    return (
        <div className="app-wrapper">
            {vacationSpots.map((spot, index) => {
                return (
                    <div className="spot-wrapper">
                        <VacationSpots {...spot} key={index}></VacationSpots>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
