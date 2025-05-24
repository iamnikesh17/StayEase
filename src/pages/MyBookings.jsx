import { assets, userBookingsDummyData } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { Circle, CircleIcon, Users } from 'lucide-react'
import React from 'react'

const MyBookings = () => {
  return (
    <div className='py-28 md:py-35 px-6 md:px-16 lg:px-32'>
        <div className='space-y-1'>
            <h1 className='font-semibold text-4xl font-playfair text-gray-800'>
                My Bookings
            </h1>
            <p className='max-w-3xl font-medium text-sm text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus soluta laudantium libero provident magnam cum fugit id illo, consectetur officia, asperiores, quod assumenda repudiandae aspernatur!    
             </p>
        </div>

        <div className='mt-10 w-full'>
            <div className='w-full grid grid-cols-[3fr_2fr_1fr] border-b border-gray-400 pb-2 gap-4'>
                <div className='md:w-1/3'>Hotels</div>
                <div className='md:w-1/3'>Date & Timings</div>
                <div className='md:w-1/3'>Payment</div>
            </div>

                {
                    userBookingsDummyData.map((booking,index)=>(
                        <div key={index} className='w-full grid grid-cols-[3fr_2fr_1fr] border-b border-gray-400 py-4 gap-4'>
                            <div className='flex gap-2 items-center'>
                                <img className='w-44 h-44 object-cover rounded-md' src={booking.room.images[0]} />
                                <div className='flex-1 space-y-2'>
                                    <h1 className='font-playfair text-3xl'>{booking.hotel.name}</h1>
                                    <div className='flex items-center gap-1'>
                                        <img src={assets.locationIcon}/>
                                        <span className='text-sm text-gray-500'>{booking.hotel.address}</span>
                                    </div>

                                    <div className='flex items-center gap-1'>
                                        <Users className='h-4 w-4'/>
                                        <span className='text-sm text-gray-500'>Guests: 2</span>
                                    </div>

                                    <div>
                                        <p className='text-lg font-semibold'>Total: Rs 1300</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <div>
                                    <p className='font-semibold text-lg'>Check-in</p>
                                    <span className='text-gray-500'>{booking.checkInDate.slice(0,10)}</span>
        
                                </div>

                                 <div>
                                    <p className='font-semibold text-lg'>Check-out</p>
                                    <span className='text-gray-500'>{booking.checkOutDate.slice(0,10)}</span>
        
                                </div>
                            </div>

                            <div className='flex items-center'>
                                {booking.isPaid ? (<span className='flex gap-2 items-center'>
                                    <CircleIcon className="text-green-500 bg-cover"/>
                                    <p className='text-sm font-semibold text-green-500'>Paid</p>
                                </span>):(
                                    <span className='flex gap-2 items-center'>
                                        <CircleIcon className="text-red-500"/>
                                        <p className='text-sm font-semibold text-red-500'>Unpaid</p>
                                        <Button variant="outline">Pay now</Button>
                                    </span>
                                )
                                }
                            </div>
                        </div>

                    ))
                }
        </div>
    </div>
  )
}

export default MyBookings