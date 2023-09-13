import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/video";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
    ]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={setVideos}></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            message="play-message"
            onPlay={() => console.log("Play")}
            onPause={() => console.log("Pause")}
          >
            Play
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play-message" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton message="pause-message" onSmash={()=>alert('Playyyyy')}>Pause</PlayButton> */}
      </div>

      <Counter></Counter>
    </div>
  );
}

export default App;
