import { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { ReactInternetSpeedMeter } from "react-internet-meter";

import "./App.css";

function App() {
  const [wifiSpeed, setwifiSpeed] = useState("checking in");

  return (
    <>
      <ReactInternetSpeedMeter
        // txtSubHeading={"Internet speed is " + wifiSpeed + " MB/s"}
        outputType="empty"
        customClassName={null}
        // txtMainHeading="Opps..."
        pingInterval={3000} // milliseconds
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={100}
        imageUrl="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png"
        downloadSize="2550420" //bytes
        callbackFunctionOnNetworkDown={(speed) =>
          console.log(`Internet speed is down ${speed}`)
        }
        callbackFunctionOnNetworkTest={(speed) => setwifiSpeed(speed)}
      />
      <div>
        <h1>Your internet speed is {wifiSpeed} MB/s</h1>

        <ReactSpeedometer
          minValue={0}
          maxValue={25}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          width={400}
          value={wifiSpeed}
          currentValueText="Internet Speed in MBps"
          customSegmentLabels={[
            {
              text: "Very Bad",
              position: "INSIDE",
              color: "#ffff",
            },
            {
              text: "Bad",
              position: "INSIDE",
              color: "#ffff",
            },
            {
              text: "Ok",
              position: "INSIDE",
              color: "#ffff",
              fontSize: "19px",
            },
            {
              text: "Good",
              position: "INSIDE",
              color: "#ffff",
            },
            {
              text: "Very Good",
              position: "INSIDE",
              color: "#ffff",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
