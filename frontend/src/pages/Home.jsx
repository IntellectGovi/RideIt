import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import axios from 'axios';
import "remixicon/fonts/remixicon.css";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import LocationSearchPanel from "../../components/LocationSearchPanel";

import VehiclePanel from "../../components/VehiclePanel";
import ConfirmRidePanel from "../../components/ConfirmRidePanel";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const driverFoundRef = useRef(null);
  const [Pickup, setPickup] = useState("");
  const [Drop, setDrop] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, seVehicleFound] = useState(false);
  const [driverFound, setdriverFound] = useState(false);
  

  const panelRef = useRef(null);

  const panelCloseRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // location-Popup gsap
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "24px",
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          padding: "12px",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0px",
          padding: "0px",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  // vehicle-Popup gsap
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  // confirmRide gsap
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );


  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );


  useGSAP(
    function () {
      if (driverFound) {
        gsap.to(driverFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(driverFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [driverFound]
  );



  return (
    <div className="h-screen relative overflow-hidden">

      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />


      {/* temporary map */}
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-[80vh] w-full"
          src="https://images.unsplash.com/photo-1717700299591-470e043edc9c?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="map"
        ></img>
      </div>


      {/* location-Search panel */}
      <div className="flex flex-col justify-end h-[93vh] absolute  top-0 w-full ">
        <div className="h-[21%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i
              className="ri-arrow-down-wide-line"
              onClick={() => {
                setPanelOpen(false);
              }}
            ></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className=" absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              value={Pickup}
              onChange={(e) => [setPickup(e.target.value)]}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={Drop}
              onChange={(e) => [setDrop(e.target.value)]}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className="bg-white h-[0%] opacity-1" ref={panelRef}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* vehicle panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-100 bottom-0 translate-y-full bg-white px-3 py-6 rounded-3xl border-gray-200 border-2"
      >
        <VehiclePanel className="rounded-full p-12" setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      {/* confirmRide panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-100 bottom-0 translate-y-full bg-white px-3 py-6 rounded-3xl"
      >
        <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} seVehicleFound={seVehicleFound} confirmRidePanel={confirmRidePanel}/>
      </div>

      {/* Looking for Driver */}
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-100 bottom-0 translate-y-full bg-white px-3 py-6 rounded-3xl"
      >
        <LookingForDriver setVehicleFound={seVehicleFound}/>
      </div>

      {/* Waiting for Driver */}
      <div
        ref={driverFoundRef}
        className="fixed w-full z-100 bottom-0 translate-y-full bg-white px-3 py-6 rounded-3xl"
      >
        <WaitingForDriver setdriverFound={setdriverFound}/>
      </div>



    </div>
  );
};

export default Home;
