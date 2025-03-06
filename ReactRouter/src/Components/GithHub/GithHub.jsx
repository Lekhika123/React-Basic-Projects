import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub(){
    const data=useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //          setData(data);
    //     })
    // },[]);
  return(
    <div className='flex flex-wrap justify-center text-center  m-4 gap-10 text-black p-4 text-3xl'>
        GitHUB Followers: {data.followers}
        <img className='rounded-full' src={data.avatar_url} alt="Git picture"  width={150}/>
        </div>
  )
}
export default GitHub;

export const githubInfoLoader = async ()=>{
     const res=await fetch('http://api.github.com/users/hiteshchoudhary')
     return res.json();
}