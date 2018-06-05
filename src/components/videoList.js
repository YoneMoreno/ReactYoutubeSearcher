import React from 'react';

const VideoList = (props) => {
    return (
        <ul className='col-md-4 list-group'>
            {props.videos && props.videos.map((video) => {
                return <img src={video.snippet.thumbnails.default.url}/>
            })}
        </ul>
    );
};

export default VideoList;
