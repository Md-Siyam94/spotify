import React from 'react';
import { NavLink } from 'react-router-dom';

const SongCard = ({ song }) => {
    const {id, title, artistName, duration, thumbnail, musicUrl } = song || {}
    return (
        <div>
            <NavLink to={`/${id}`} className={({isActive})=> isActive ? "" : ""}>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-10 w-10 rounded-full object-cover' src={thumbnail} alt="" />
                        <div>
                            <h2 className='font-semibold'>{title}</h2>
                            <p className='text-sm opacity-80'>{artistName}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='opacity-60'>{duration}</h2>

                    </div>
                </div>
            </NavLink>

        </div>
    );
};

export default SongCard;