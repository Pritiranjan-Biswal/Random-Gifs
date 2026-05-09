import useGif from '../hooks/useGif';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
console.log(API_KEY);

const Random = () => {
  // const [gif, setGif]=useState('');
   
  // const [loading, setLoading]=useState(false);
 

  // async function fetchData() {
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource);    
  //   setLoading(false);
    
  // }
  // useEffect(() => {
  //   fetchData();
  // },[]);
  const {gif, loading, fetchData}=useGif();


  function clickHandler() {
    fetchData();
  }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border-2 border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h3 className='mt-[15px] text-xl underline uppercase font-bold'> A Random Gif</h3>

      {
        loading ? (<div>Loading ...</div>) : (<img src={gif} alt="Random GIF" width="450" height="250" />)
      }
      
      <button onClick={clickHandler} className='w-9/12 bg-yellow-500 text-lg py-1 rounded-lg mb-[20px]'>
      Generate
      </button>
    </div>
  )
}

export default Random
