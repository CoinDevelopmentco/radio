import React,{useState} from 'react';
import DataPlaylist from '/home/matt/code/IPFS-RAIO/src/Components/Data/DataPlaylist.json';
import PlaylistLibrary from '/home/matt/code/IPFS-RAIO/src/Components/Data/PlaylistLibrary.json'
import './Dashboard.css';
import DisplayPlaylist from './DisplayPlaylist.js';


function Playlists({myPick,setPick,setRadioMenu}) {
    
    
    function PickPlaylist() {
        
        const pick = PlaylistLibrary.filter(pickPlay => pickPlay.PlaylistGenre === myPick);
        
        return(
            <div className="flex">
                {pick.map((playlist) => ( 
                    <DisplayPlaylist setRadioMenu={setRadioMenu} myPick={myPick} setPick={setPick} playlist={playlist.Playlist} key={playlist.Playlist} coverFile={playlist.coverFile} />)
                    ) }
            </div>
        )
    }
    
    function PlaylistDashboard() {
        return(
            <div className="flex">
                {DataPlaylist.map((playlist) => (
                    <DisplayPlaylist setRadioMenu={setRadioMenu} myPick={myPick} setPick={setPick} key={playlist.Playlist} playlist={playlist.Playlist} genre={playlist.PlaylistGenre} coverFile={playlist.coverFile} />)
                    ) }
            </div>
        )
    }

    
    return(
        <div className="child" >
            {myPick ? <PickPlaylist setRadioMenu={setRadioMenu} myPick={myPick} setPick={setPick} /> : <PlaylistDashboard setRadioMenu={setRadioMenu} myPick={myPick} setPick={setPick} />}
        </div>
    );
}

export default Playlists;
