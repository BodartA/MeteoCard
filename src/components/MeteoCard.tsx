import sunny from '../assets/sun.png'

const MeteoCard = () => {
  return (
    <div className=' border-4 border-dobunezumi rounded-3xl h-[535px] w-[388px] p-2 font-DM bg-sabiasagi text-gofun'>
      <div className=' flex flex-col w-full h-full'>
        <div className='flex justify-between w-full h-1/4'>
          <div className=''>
            <h2 className=" font-light">Monday, 03 August</h2>
            <h1 className=" text-3xl font-semibold">Paris</h1>
            <h2 className=" font-light">France</h2>
          </div>
          <div className=' flex justify-center' style={{ writingMode: 'vertical-rl' }}>
            <h1 className=' font-light text-5xl'>Sunny</h1>
          </div>
        </div>
        <img src={sunny} alt='Sunny' className=' w-full h-2/4 object-contain '></img>
        <div className='w-full h-1/4 flex items-center'>
          <h1 className=' font-light text-8xl flex'>19
            <h3 className=' font-light text-4xl'>°C</h3>
          </h1>

        </div>
      </div>
    </div>
  );
};

export default MeteoCard;