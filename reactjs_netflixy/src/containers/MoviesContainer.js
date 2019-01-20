import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import _ from "lodash";
import { getMovies } from "../actions/movieActions";

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
    movies : _.values(state.movies)
});

export default connect(
    mapStateToProps, 
    { getMovies }
)(MoviesContainer);