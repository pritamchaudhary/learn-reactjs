
import { useState } from 'react';
import './PlayButton.css';

function PlayButton({message,children, onSmash, onPlay, onPause}) {
    // let playing = false;  //don't use this approach

    const [playing, setPlaying] = useState(false);

    function handleClick(e){
        e.stopPropagation();
        e.preventDefault();
        // console.log(message);
        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }
  return (
    <button onClick={handleClick}>{children} : {playing ? '>' : '||'}</button>
  )
}

export default PlayButton;