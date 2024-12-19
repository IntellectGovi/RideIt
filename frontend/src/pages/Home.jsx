import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import axios from 'axios';
import "remixicon/fonts/remixicon.css";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import LocationSearchPanel from "../../components/LocationSearchPanel";

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  console.log(panelOpen);
  const [Pickup, setPickup] = useState("");
  const [Drop, setDrop] = useState("");

  const panelRef = useRef(null);

  const panelCloseRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

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

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-[70vh] w-full"
          src="https://100map.net/img/en/letter_portrait_tokyo.png"
          alt="map"
        ></img>
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
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
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
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
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0leWMQ7sw2zVvw0RhepJ3r7rN0Y8EzSemQ&s"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">1 sec away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹65</h2>
        </div>

        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹118.86</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
