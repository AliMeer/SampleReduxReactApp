import React, {Component}  from 'react';
import VideoItem from './video_item';

class VideoList extends Component   {
    constructor(props)  {
        super(props);
    }
    videoItems()    {
        return(this.props.videos.map((video)=>{
            return <VideoItem 
            onVideoSelect={this.props.onVideoSelect} 
            key={video.etag} video={video} />
        }));
    }
    render()    {
        return(
            <ul className='col-md-4 list-group'>
            {this.videoItems()}
            </ul>
        );
    }

}

export default VideoList;