import React, { useEffect, useState } from 'react'
import axios from 'axios';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
console.log(API_KEY);

const Random = () => {
  const [gif, setGif]=useState('');

 

  async function fetchData() {
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}=await axios.get(url);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);    
    
    
  }
  useEffect(() => {
    fetchData();
  },[]);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border-2 border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h3 className='mt-[15px] text-xl underline uppercase font-bold'> A Random Gif</h3>
      <img
  src={gif}
  alt="Random Gif"
  className='w-[450px] h-[250px] object-cover rounded-lg'
/>
      <button onClick={clickHandler} className='w-9/12 bg-yellow-500 text-lg py-1 rounded-lg mb-[20px]'>
      Generate
      </button>
    </div>
  )
}

export default Random
