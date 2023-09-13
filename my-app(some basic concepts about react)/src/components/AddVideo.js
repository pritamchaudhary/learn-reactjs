import { useState } from "react";
import "./AddVideo.css";

function AddVideo({addVideos}) {
  const [video, setVideo] = useState({
    views: "99K",
    time: "1 Month ago",
    channel: "Pritam",
    verified: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video );
    // console.log(video);
  }
  function handleChange(e) {
    e.stopPropagation();
    // console.log(e.target.name, e.target.value);
    setVideo({...video, [e.target.name]: e.target.value})
    // console.log(video);
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      />
      <button
        onClick={handleSubmit}

        //   onClick={() => {
        
        //   }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
