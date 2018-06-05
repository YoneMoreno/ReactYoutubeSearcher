import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/SearchBar";
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyATS38RuWTxH2vL9QSu_NTjE5JXlU3MzgU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surf'}, (data) => {
            this.setState(() => {
                return {videos: data};
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                We have our first component
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));