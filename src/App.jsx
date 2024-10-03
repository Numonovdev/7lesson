import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Top from './components/Top'
import Home from './pages/Home'
import Albom from './pages/Albom'
import { useEffect } from 'react'

function App() {
  return (
    <>
    <Top/>
    <header className='bg-violet-100 h-20 w-full mb-[100px]'>
      <div className="max-w-6xl flex justify-between items-center w-full h-full mx-auto">
        <div className="w-12 h-12 flex justify-center items-center text-[28px] rounded-xl text-gray-300 bg-blue-600">C</div>
        <div className="flex gap-1 h-full items-center">
          <Link to='/' className='py-2 px-6 rounded-xl focus:text-white focus:bg-black'>Home</Link>
          <Link to='/albom' className='py-2 px-6 rounded-xl focus:bg-black focus:text-white'>Albom</Link>
        </div>
        <div className="flex gap-1 h-full items-center ">
        </div>
      </div>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/albom' element={<Albom/>}></Route>
    </Routes>
    </>
  )
}

export default App
