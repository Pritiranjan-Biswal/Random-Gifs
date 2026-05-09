import React, { useState } from 'react';
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('car');

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h3 className='mt-[15px] text-xl underline uppercase font-bold'>
        Random {tag} GIF
      </h3>

      {
        loading ? (
          <p>Loading...</p>
        ) : (
          gif && (
            <img
              src={gif}
              alt='Tag GIF'
              width='450'
              height='250'
            />
          )
        )
      }

      <input
        type='text'
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder='Enter tag'
        className='w-10/12 text-lg py-1 rounded-lg mb-[3px] text-center'
      />

      <button
        onClick={() => fetchData(tag)}
        className='w-9/12 bg-yellow-500 text-lg py-1 rounded-lg mb-[20px]'
      >
        Generate
      </button>

    </div>
  );
};

export default Tag;