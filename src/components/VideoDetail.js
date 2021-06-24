import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div>
          <iframe title={video.snippet.title} src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p className="description">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};
export default VideoDetail;
