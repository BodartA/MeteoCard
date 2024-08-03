import './App.css'
import MeteoCard from './components/MeteoCard'

function App() {

  return (
    <main className=' bg-shironeri min-h-screen flex justify-center items-center'>
      <div className='pt-[50px] flex flex-col items-center'>
        <h1 className='text-4xl text-center font-DM font-semibold text-dobunezumi'>It's just another weather website.</h1>
        <h2 className='text-lg text-center font-light my-4 font-NotoSansJP text-aonibi'>ごめんなさい。</h2>
        <MeteoCard />
      </div>
    </main>
  )
}

export default App
