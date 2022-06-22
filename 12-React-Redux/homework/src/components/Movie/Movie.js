import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}

    render() {
        return (
            <div className="movie-detail">
                <h1> {this.props.movie.Title} </h1>
                <ul>
                <li> {this.props.movie.Genre} </li>
                <li> {this.props.movie.Released} </li>
                <li> {this.props.movie.Director} </li>
                <li> {this.props.movie.Actors} </li>
                <img src={this.props.movie.Poster} alt='poster'/>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    }
}


export default connect(mapStateToProps, { getMovieDetail })(Movie);


/* Title(pin):"Titanic"
Year(pin):"1997"
Rated(pin):"PG-13"
Released(pin):"19 Dec 1997"
Runtime(pin):"194 min"
Genre(pin):"Drama, Romance"
Director(pin):"James Cameron"
Writer(pin):"James Cameron"
Actors(pin):"Leonardo DiCaprio, Kate Winslet, Billy Zane"
Plot(pin):"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
Language(pin):"English, Swedish, Italian, French"
Country(pin):"United States, Mexico"
Awards(pin):"Won 11 Oscars. 125 wins & 83 nominations total"
Poster(pin):"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"*/