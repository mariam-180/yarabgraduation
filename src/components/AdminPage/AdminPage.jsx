import React from 'react'
import Style from './AdminPage.module.css'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
 import AdminUsers from '../AdminUsers/AdminUsers'
 import AdminDoctors from '../AdminDoctors/AdminDoctors'
 import AdminAwareness from '../AdminAwareness/AdminAwareness'

export default function AdminPage() {
  return (
    <div className={Style.mainContainer}>

  {/* Dashboard Section */}
      <section className={`${Style.section} ${Style.dashboardSection}`}>
        <AdminDashboard />
      </section>

      {/* Users Section */}
      <section className={`${Style.section} ${Style.usersSection}`}>
        <AdminUsers />
      </section>

      {/* Doctors Section */}
      {/* <section className={`${Style.section} ${Style.doctorsSection}`}>
        <AdminDoctors />
      </section> */}

      {/* Awareness Section */}
      <section className={`${Style.section} ${Style.awarenessSection}`}>
        <AdminAwareness />
      </section>
    </div>
  )
}