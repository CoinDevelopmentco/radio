import React,{useState} from 'react';
import './Dashboard.css';
import Playlists from './Playlists';
import LiveRadio from '/home/matt/code/IPFS-RAIO/src/Components/LiveRadio/LiveRadio.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



const Dashboard = ({playlistMenu,setPlaylistMenu,radioMenu,setRadioMenu,myPick,setPick}) => {
    
    function playlist() {
        setPlaylistMenu("show")
        setRadioMenu(null)
        setPick(null)
    }

    function playRadio() {
        setRadioMenu("show")
        setPlaylistMenu(null)
        setPick(null)
    }
           
    return(
        <div className="parent" >
            <div className="playlist-container" >
                <div onClick={playlist} className="playlist" >
                    ---Playlists---
                </div>
            </div>
            <div className="liveRadio-container" >
            <div onClick={playRadio} className="liveRadio" >
                    ---LiveRadio---
                </div>
            </div>
            <Container className="child0" >
                <Row>
                    {playlistMenu ? <Playlists myPick={myPick} setPick={setPick} setRadioMenu={setRadioMenu} /> : null }
                </Row>
                <Row>
                </Row>
                <Row >
                    {radioMenu ? <LiveRadio myPick={myPick} setPick={setPick} setRadioMenu={setRadioMenu} setPlaylistMenu={setPlaylistMenu} /> : null }
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;