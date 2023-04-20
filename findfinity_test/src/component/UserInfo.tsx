import React from 'react'
import '../App.css';

const UserInfo = (props:any) => {

  return (
    <>
<ProfileAvatar url = {props.url}/>
<div className="user-box">
        <div>{props.name}</div>
        <div>{props.email}</div>
    </div>
    </>
    
  )
}

export default UserInfo

const ProfileAvatar = (props:any) => {
  return (
    <img className='avatar circle' src= {props.url}/>
  )
}
