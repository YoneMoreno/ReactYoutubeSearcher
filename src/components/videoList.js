import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

    const videoListItems = props.videos.map((video) =>
        <VideoListItem
            video={video}
            key={video.etag}
        />);

    return (
        <ul className='col-md-4 list-group'>
            {videoListItems}
        </ul>
    );
};

export default VideoList;
