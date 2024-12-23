import { CgLoadbarAlt } from "react-icons/cg";



import React from 'react'

const ConfirmRidePanel = ({setConfirmRidePanel , confirmRidePanel}) => {
    console.log(confirmRidePanel);
    return (
        <div className="flex flex-col justify-between items-center">
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                setConfirmRidePanel(false)
            }}><CgLoadbarAlt
                      className="flex items-center justify-center text-4xl cursor-pointer w-full"
                      onClick={() => {setConfirmRidePanel(!confirmRidePanel)}}
                    /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='style' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='w-full mt-5 gap-3 text-3xl confirmPanel'>
                    <div className='flex items-center gap p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-3xl font-medium'>562/11-A</h3>
                            <p className='text-lg -mt-1 text-gray-600'>Noida , Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className='flex items-center gap p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-3xl font-medium'>562/11-A</h3>
                            <p className='text-lg -mt-1 text-gray-600'>Noida , Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className='flex items-center gap p-3'>
                        <i className="ri-currency-line"></i>
                        <div className="mb-2">
                            <h3 className='text-3xl font-medium'>₹5000</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button className='rideBtn'>Confirm</button>
                
            </div>
        </div>
    )
}

export default ConfirmRidePanel