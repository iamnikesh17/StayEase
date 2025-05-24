import AllRooms from '@/pages/AllRooms'
import HomePage from '@/pages/HomePage'
import MyBookings from '@/pages/MyBookings'
import RoomDetail from '@/pages/RoomDetail'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/rooms" element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetail/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes