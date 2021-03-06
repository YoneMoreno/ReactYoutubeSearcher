import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import * as _ from "lodash/function";

const API_KEY = 'AIzaSyATS38RuWTxH2vL9QSu_NTjE5JXlU3MzgU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('react');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
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

    onSearchTermChange = (term) => {
        this.videoSearch(term);
    };


    render() {

        const onSearchTermChange = _.debounce((this.onSearchTermChange), 300);

        return (
            <div>
                <SearchBar onSearchTermChange={onSearchTermChange}/>
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