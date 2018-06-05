import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img
                        src={video.snippet.thumbnails.default.url}
                        className='media-object'
                    />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>
                        <p>{video.snippet.title}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;