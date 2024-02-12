"use client"
import React, { useEffect, useState } from 'react'

export default function Footer({searchParams}) {
  // const userin=window.location.href.toString().includes("sign-in")
  // const userup=window.location.href.toString().includes("sign-up")
  // const {user}=useUser()


  const [userlocation,setUserlocation]=useState(false)
  useEffect(()=>{
    setUserlocation(searchParams.toString().includes('sign-in'))
  },[])
  
  if(!userlocation){
    return (
      <div>Footer</div>
    )
  }
}
