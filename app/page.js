"use client"
import axios from 'axios';
import React,{ useState } from 'react'

const page = () => {
  const [Images, setImages] = useState([])
  const getImages = async()=>{
    try {
      // using  Lorem Picsum API 
    const responce = await axios.get("https://picsum.photos/v2/list")
    const data = responce.data;
    setImages(data)
    
    } catch (error) {
    }

  };
  return (
    
    <div>
      <h1 className='px-6 py-6  text-violet-500 text-center font-bold text-2xl'> This website using Lorem Ipsum API.</h1>
       <button 
         onClick={getImages}
         className='px-5 py-3 bg-violet-800 text-white font-bold'>

          Get Images
         </button>
       <div className='py-2.5'> 
         {Images.map((elem,i)=>{
          return <img
         key={i}
         src={elem.download_url}
         width={300}
         height={300}
         className='m-10 rounded inline-block '
         
          />

      })}
       </div>
    </div>
  );
};

export default page; 