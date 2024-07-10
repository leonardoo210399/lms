import React from 'react'
import MobileSidebar from './mobile-Sidebar'
import NavbarRoutes from '@/components/navbar-routes'

const Navber = () => {
  return (
    <div className='p-4 border-b h-full flex item-center bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}

export default Navber
