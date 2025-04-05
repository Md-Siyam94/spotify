import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SelectedSong = () => {
    const {id} = useParams()
    console.log(id);
    const data = useLoaderData()
    const [song, setSongs] = useState({})


    useEffect(()=>{
        const song = data.filter(e=> e.id === parseInt(id))
        setSongs(song)
    },[id])
    return (
        <div>
           
        </div>
    );
};

export default SelectedSong;