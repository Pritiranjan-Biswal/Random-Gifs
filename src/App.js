import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';






function App() {
  return (
    <div className='w-full h-screen flex flex-col background' >
      <h1 className='bg-white rounded-sm w-full text-center mt-[40px] '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>                   
        <Tag/>
      </div>
    </div>
  );
}

export default App;
