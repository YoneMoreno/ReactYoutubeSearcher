import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <input
                onChange={this.onInputChange}
            />
        );
    }

    onInputChange(e) {
        console.log('change', e.target.value);
    }
}

export default SearchBar;