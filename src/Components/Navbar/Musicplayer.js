import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Musicplayer.css';
import currentTrack from './01 Radioactive.wav';


function Musicplayer() {
    

    return(
        <AudioPlayer
            autoPlay={false}
            src={currentTrack}
            onPlay={e => console.log("Song Is Now Playing")}
            showJumpControls={false}
            showSkipControls
        />
    );
}

export default Musicplayer;