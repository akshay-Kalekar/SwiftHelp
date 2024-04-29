import React, { useState,useEffect } from 'react'
import Sidebar from '../component/UserDashboard/Sidebar'
import Notifications from '../component/UserDashboard/Notifications'
import ProfileDetails from '../component/UserDashboard/ProfileDetails'

const UserDashboard = () => {
    const [option,setOption] = useState(0);
    useEffect(() => {
        console.log(option);
    }, [option])
    
  return (
    <>
    <Sidebar setOption={setOption}/>
    {
        option == 0 ?
        <ProfileDetails /> :
        <Notifications  /> 
    }
    </>
  )
}

export default UserDashboard
