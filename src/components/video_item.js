import React, { Component} from 'react';

const VideoItem = ({video, onVideoSelect})=> {
    //const video = props.video;

    return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list-media">
            <div className="media-left">
                <img className="media-object" src={video.snippet.thumbnails.default.url} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoItem;