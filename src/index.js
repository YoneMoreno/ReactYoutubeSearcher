import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/VideoList";

const API_KEY = 'AIzaSyATS38RuWTxH2vL9QSu_NTjE5JXlU3MzgU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
            this.setState(() => {
                return {videos};
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));