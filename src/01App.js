import React, { useState, useEffect } from "react";
import "./App.css";

const App01 = () => {
  // const [tempUnit, setTempUnit] = useState("Farenheit");
  // const [tempreture, setTempreture] = useState(0);

  const [aircon, setAircon] = useState({
    tempUnit: "Farenheit",
    tempreture: 0,
    isOn: false,
  });

  const handlePowerSwitch = () => {
    setAircon({ ...aircon, isOn: !aircon.isOn });
  };

  useEffect(() => {
    document.title = "hoge"
    document.title = `Power is ${aircon.isOn ? "ON" : "OFF"}`
    console.log("RUNS");
  }, [aircon.isOn]);

  return (
    <div>
      <button onClick={handlePowerSwitch}>
        Power is {aircon.isOn ? "On" : "Off"}
      </button>
      <button
        onClick={() =>
          setAircon((prevState) => ({ ...prevState, tempUnit: "Cecius"}))
        }
      >
        Change Unit
      </button>
      <p>Tempreture is in {aircon.tempUnit}</p>

      <input
        type="number"
        onChange={(e) =>
          setAircon((prevState) => ({
            ...prevState,
            tempreture: e.target.value,
          }))
        }
        value={aircon.tempreture}
      />
      <p>
        Tempreture: {aircon.tempreture} degrees {aircon.tempUnit}
      </p>
    </div>
  );
};

export default App01;
