import React from 'react';
import DataPlaylist from './DataPlaylist.json';
import './Dashboard.css';
import RadioStations from './RadioStations';


function LiveRadio({myPick,setPick,setPlaylistMenu}) {
    
    
    function PickRadioStation() {
        
        const pick = DataPlaylist.filter(pickPlay => pickPlay.PlaylistGenre === myPick);
        
        return(
            <div className="flex">
                {pick.map((radio) => ( 
                    <RadioStations setPlaylistMenu={setPlaylistMenu} myPick={myPick} setPick={setPick} playlist={radio.Playlist} key={radio.Playlist} genre={radio.PlaylistGenre} coverFile={radio.coverFile} />)
                    ) }
            </div>
        )
    }
    
    function RadioDashboard() {
        return(
            <div className="flex">
                {DataPlaylist.map((radio) => (
                    <RadioStations setPlaylistMenu={setPlaylistMenu} myPick={myPick} setPick={setPick} key={radio.Playlist} playlist={radio.Playlist} genre={radio.PlaylistGenre} coverFile={radio.coverFile} />)
                    ) }
            </div>
        )
    }

    
    return(
        <div className="child" >
            {myPick ? <PickRadioStation setPlaylistMenu={setPlaylistMenu} myPick={myPick} setPick={setPick} /> : <RadioDashboard setPlaylistMenu={setPlaylistMenu} myPick={myPick} setPick={setPick} />}
        </div>
    );
}

export default LiveRadio;
