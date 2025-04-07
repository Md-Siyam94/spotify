import { Link, Outlet } from 'react-router-dom'
import SpotifyLogo from '../src/assets/spotify.png'
import SongList from './components/SongList'
function App() {

  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="w-full pl-8 border">
        <div className="flex my-4  gap-2 items-center">
          <img className="h-10 w-10 rounded-full object-cover" src={SpotifyLogo} alt="Logo" />
          <h2 className="text-2xl font-semibold">Spotify</h2>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <Link><button className=''>For You</button></Link>
          <Link><button className='my'>Top Tracks</button></Link>
          <Link><button>Favourites</button></Link>
          <Link><button>Recently Played</button></Link>
        </div>
      </div>
      <div className=" col-span-2 border">
        <SongList></SongList>
      </div>
      <div className="grid justify-center min-h-screen my-auto col-span-3 border">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
