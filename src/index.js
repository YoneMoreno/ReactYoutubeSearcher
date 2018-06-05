import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = 'AIzaSyATS38RuWTxH2vL9QSu_NTjE5JXlU3MzgU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'goal'}, (videos) => {
            this.setState(() => {
                return {
                    videos: videos,
                    selectedVideo: videos[0]
                };
            })
        });
    }


    onVideoSelect = (selectedVideo) => {
        console.log(selectedVideo);
        this.setState(() => ({
            selectedVideo: selectedVideo
        }));
    };

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));