import React, { useEffect, useState } from 'react'
import Style from './SideBar.module.css'
import { NavLink } from 'react-router-dom'

export default function SideBar() {


    return <>
        <div className={` ${Style.siderBar}`}>
            {/* <div className='bg-gray-400'>
                <h1 className='text-2xl font-bold py-3.5 text-white text-center'>SideBar</h1>

            </div> */}

            <div className='py-5'>
                <ul className=' text-lg font-semibold text-gray-300'>
                    <li className='border-b-2 border-b-zinc-400 py-3 ps-4 '><NavLink className="cursor-pointer flex items-center gap-2" to='doctorprofile'> <i class="fa-solid fa-circle-user"></i>Profile  </NavLink></li>
                    <li className='border-b-2 border-b-zinc-400 py-3 ps-4 '><NavLink className="cursor-pointer flex items-center gap-2" to='aianalysis' ><i class="fa-solid fa-robot"></i> Ai Analysis</NavLink></li>
                    <li className='border-b-2 border-b-zinc-400 py-3 ps-4 '><NavLink className="cursor-pointer flex items-center gap-2" to='cases'> <i class="fa-solid fa-file-medical"></i>Cases</NavLink></li>
                    <li className='border-b-2 border-b-zinc-400 py-3 ps-4 '><NavLink className="cursor-pointer flex items-center gap-2" to='reports'> <i class="fa-solid fa-file-invoice"></i>Reports</NavLink></li>
                    <li className='border-b-2 border-b-zinc-400 py-3 ps-4 '><NavLink className="cursor-pointer flex items-center gap-2" to='appointments'> <i class="fa-solid fa-calendar-check"></i>Appointments</NavLink></li>
                </ul>
            </div>
        </div>
    </>

}
