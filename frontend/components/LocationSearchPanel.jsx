import React from "react";
import { MdOutlineShareLocation } from "react-icons/md";
const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  // Sample Data
  const locations = [
    "Basai , Sector 70 , Noida , Uttar Pradesh",
    "Basai , Sector 71 , Noida , Uttar Pradesh",
    "Basai , Sector 72 , Noida , Uttar Pradesh",
    "Basai , Sector 73 , Noida , Uttar Pradesh",
  ];

  
  return (
    <div className="gap-4">
      {locations.map((location) => {
        return (
          <div
            className="container"
            key={location}
            onClick={() => (
              setPanelOpen(false),
              setVehiclePanel(true))
            }
          >
            <h2 className="box">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="location">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
