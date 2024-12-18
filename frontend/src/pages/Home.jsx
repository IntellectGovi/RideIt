import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [ panelOpen, setPanelOpen ] = useState(false)
    console.log(panelOpen);
    const [Pickup, setPickup] = useState('');
    const [Drop, setDrop] = useState('');

    const panelRef = useRef(null)

    const panelCloseRef = useRef(null)
    const navigate = useNavigate()
    const { user } = useContext(UserDataContext)


    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',  
                padding: '24px', 
                opacity: 1
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1
            });
        } else {
            gsap.to(panelRef.current, {  
                height: '0px',
                padding: '0px',  
                opacity: 0
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0
            });
        }
    }, [panelOpen]);
    

    

    

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className="h-[70vh] w-full" src='https://100map.net/img/en/letter_portrait_tokyo.png' alt='map'></img>
            </div> 
            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line" onClick={() => {
                            setPanelOpen(false);
                        }}></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
                        <input
                            value={Pickup}
                            onChange={(e) => [
                                setPickup(e.target.value)
                            ]}
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            value={Drop}
                            onChange={(e) => [
                                setDrop(e.target.value)
                            ]}
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                </div>
                <div className='bg-red-500 h-[0%] opacity-1' ref={panelRef}>

                </div>

            </div>
            
        </div>
    )
}

export default Home