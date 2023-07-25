import React from "react";
import {Movies} from '../components/Movies'


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=d09b87a7&s=naruto')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search})) //знаем что именно по этому ключу именно найдем
    }

    render() {
        const {movies} = this.state;

        return <main className = "container content">
            {
                movies.length ? (
                    <Movies movies = {this.state.movies}/>
                ) : <h5>Loading</h5>
            }

        </main>

    }


}

export {Main};