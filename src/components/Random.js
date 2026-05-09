import React from 'react';
import useGif from '../hooks/useGif';

const Random = () => {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border-2 border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h3 className='mt-[15px] text-xl underline uppercase font-bold'>
        A Random GIF
      </h3>

      {
        loading ? (
          <p>Loading...</p>
        ) : (
          gif && (
            <img
              src={gif}
              alt='Random GIF'
              width='450'
              height='250'
            />
          )
        )
      }

      <button
        onClick={() => fetchData()}
        className='w-9/12 bg-yellow-500 text-lg py-1 rounded-lg mb-[20px]'
      >
        Generate
      </button>

    </div>
  );
};

export default Random;