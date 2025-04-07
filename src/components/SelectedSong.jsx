import { useEffect, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";

const SelectedSong = () => {
    const {id} = useParams()
    console.log(id);
    const data = useLoaderData()
    const [song, setSongs] = useState({})
console.log(song);

    useEffect(()=>{
        const music = data.filter(e=> e.id === parseInt(id))
        const audio = music.map(e=> setSongs(e))
        
    },[id])

    const { title, artistName, duration, thumbnail, musicUrl } = song || {}

    const isPlaying = true
    return (
        <div className="">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-sm opacity-80 my-1">{artistName}</p>


            <img className="h-96 w-96 object-cover my-4" src={thumbnail} alt="" />
            <audio 
            // ref={audioRef} 
            src={musicUrl} autoPlay />
            {/* Player controls */}
           <div className="flex items-center space-x-6">
              <button
                // onClick={handlePrevious}
                className="text-gray-400 hover:text-white"
              >
                <FaBackward className="h-6 w-6" />
              </button>
              <button
                // onClick={handlePlayPause}
                className="bg-white rounded-full p-2 hover:scale-105 transition"
              >
                {isPlaying ? (
                  <FaPause className="h-6 w-6 text-black" />
                ) : (
                  <FaPlay className="h-6 w-6 text-black" />
                )}
              </button>
              <button
                // onClick={handleNext}
                className="text-gray-400 hover:text-white"
              >
                <FaForward className="h-6 w-6" />
              </button>
            </div>
        </div>
    );
};

export default SelectedSong;