import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    console.log(video);
    return (
        <li>
            <img src={video.snippet.thumbnails.default.url}/>
        </li>
    );
};

export default VideoListItem;