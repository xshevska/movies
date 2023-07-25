import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.findMovies(this.state.search);
        }
    };

    handleFilter = (event) => {
        this.setState({type: event.target.dataset.type});
    };

    render() {
        return (
            <div className = "row">
                <div className = "input-field">
                    <input
                        placeholder = "search"
                        type = "search"
                        className = "validate"
                        value = {this.state.search}
                        onChange = {(event) => this.setState({search: event.target.value})}
                        onKeyDown = {this.handleKey}
                    />
                    <button
                        className = "btn search-btn"
                        onClick = {() =>
                            this.props.findMovies(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className = "with-gap"
                            name = "type"
                            type = "radio"
                            data-type = "all"
                            onChange = {this.handleFilter}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className = "with-gap"
                            name = "type"
                            type = "radio"
                            data-type = "movie"
                            onChange = {this.handleFilter}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className = "with-gap"
                            name = "type"
                            type = "radio"
                            data-type = "series"
                            onChange = {this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export {Search};
