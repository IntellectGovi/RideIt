import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Riding = () => {
    const location = useLocation()
    const navigate = useNavigate()



    return (
        <div className='h-screen rounded-xl'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10  flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-[60vh] w-[100vw] bg' src='https://miro.medium.com/v2/resize:fit:6068/1*4kI1Hl7acOf-BXuK7gZVeQ.png'/>

            </div>
            <div className='h-1/2 p-6 '>
                

                <div className='flex gap-2 mt-36 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                    <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>Govind Upadhyay</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'></h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

                    </div>
                </div>

                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Noida , Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹250 </h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding