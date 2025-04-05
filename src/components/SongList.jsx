
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import SongCard from './SongCard';
const SongList = () => {
    const [songs, setSongs] = useState([])

    useEffect(()=>{
        fetch('/public/musicData.json')
        .then(res=> res.json())
        .then(data=>{
            setSongs(data);
        })
    },[])



    return (
        <div className='px-6 py-4'>
            <h2 className="text-3xl font-semibold my-3">For You</h2>
            <Form inline className=''>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2 pl-3 border rounded-md py-3 w-full"
                        />
                    </Col>
                </Row>
            </Form>
            <div className='mt-4'>
                {
                    songs.map((song, index)=> <SongCard key={index} song={song}></SongCard> )
                }
            </div>
        </div>
    );
};

export default SongList;