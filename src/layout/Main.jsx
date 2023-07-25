import React from "react";
import {Movies} from "../components/Movies";
import {Search} from "../components/Search";
import {Preloader} from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=d09b87a7&s=naruto")
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}));
    }

    findMovies = (str) => {
        this.setState({movies: []});
        fetch(`https://www.omdbapi.com/?apikey=d09b87a7&s=${str}`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}));
    };

    render() {
        const {movies} = this.state;

        return (
            <main className = "container content">
                <Search findMovies = {this.findMovies}/>
                {movies.length ? <Movies movies = {this.state.movies}/> : <Preloader/>}
            </main>
        );
    }
}

export {Main};
