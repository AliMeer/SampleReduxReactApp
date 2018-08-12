import React from 'react';

const VideoDetail = ({video}) => {
    //const videoId = video.Id.videoId;
    //const url = `https://www.youtube.com/embed/${videoId}`;
    //console.log('Before check' + video);
    if (!video) {
        return <div>Loading...</div>;
    }
    
    //console.log('Video available');
    //console.log(video);
        const vId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${vId}`;
        return (

            <div className="video-detail col-md-8">
                <div className="embed-response">
                    <iframe width='750' height='420' className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    
};


export default VideoDetail;