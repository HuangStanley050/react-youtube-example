import React from "react";
import "./styles.css";
import YouTube from "react-youtube";

export default function App() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const onPause = event => {
    console.log("current time: ", event.target.getCurrentTime());
    console.log("duration: ", event.target.getDuration());
    //console.log(event.target.getDuration());
  };
  const onEnd = event => {
    //console.log(event);
  };
  return (
    <YouTube
      videoId="2g811Eo7K8U"
      opts={opts}
      onReady={_onReady}
      onPause={onPause} // defaults -> noop
      onEnd={onEnd}
    />
  );
}
