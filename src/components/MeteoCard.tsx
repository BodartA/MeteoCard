import sunny from '../assets/sun.png'

const MeteoCard = () => {
  return (
    <div className='border-2 border-dobunezumi rounded-3xl h-[535px] w-[388px] p-2 font-DM'>
      <div className='flex justify-between'>
        <div className=''>
          <h2 className=" font-light">Monday, 03 August</h2>
          <h1 className=" text-3xl font-semibold">Paris</h1>
          <h2 className=" font-light">France</h2>
        </div>
        <div className='' style={{ writingMode: 'vertical-rl' }}>
          <h1 className=' font-light text-5xl'>Sunny</h1>
        </div>
      </div>
      <img src={sunny} alt='Sunny' className=' h-80 w-80'></img>
      <h1 className=' font-bold text-4xl'>19°C</h1>

    </div>
  );
};

export default MeteoCard;