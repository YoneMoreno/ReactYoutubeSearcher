import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onInputChange}
                />
                <p>Value entered in SearchBar: {this.state.term}</p>
            </div>

        );
    }

    onInputChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({term: text}));
    };
}



export default SearchBar;