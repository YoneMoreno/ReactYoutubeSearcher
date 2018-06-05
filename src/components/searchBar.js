import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <input
                onChange={this.onInputChange}
            />
        );
    }

    onInputChange = (e) => {
        console.log(this.state.term);
        const text = e.target.value;

        this.setState(() => ({term: text}));
    };
}

export default SearchBar;