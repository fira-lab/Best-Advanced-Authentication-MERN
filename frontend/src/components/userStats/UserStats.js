import React from 'react'
import { FaUsers } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { BiUserMinus } from "react-icons/bi";
import { BiUserX } from "react-icons/bi";
import Infobox from '../infoBox/Infobox';
import './UserStats.css';

const icon1 = <FaUsers size={40} color='#fff'/> ;
const icon2 = <BiUserCheck size={40} color='#fff'/> ;
const icon3 = <BiUserMinus size={40} color='#fff'/> ;
const icon4 = <BiUserX size={40} color='#fff'/> ;

const UserStats = () => {
  return (
    <div className='user-summary'>
        <h3 className='--mt'> User Stats</h3>
        <div className='info-summay'>
            <Infobox icon={icon1} title={"Total Users"} count={"3"} bgColor={"card1"} />

            <Infobox icon={icon2} title={"Verified Users"} count={"3"} bgColor={"card2"} />
   
            <Infobox icon={icon3} title={"Unverified Users"} count={"3"} bgColor={"card3"} />

            <Infobox icon={icon4} title={"Suspended Users"} count={"3"} bgColor={""} />
   
         
        </div>
      
    </div>
  )
}

export default UserStats;
