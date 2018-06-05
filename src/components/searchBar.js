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
                    className='search-bar'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>

        );
    }

    onInputChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({term: text}));
        this.props.onSearchTermChange(this.state.term);
    };
}


export default SearchBar;