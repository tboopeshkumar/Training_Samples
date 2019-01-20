import React from "react";
import StyledMovieContainer from "../styled/StyledMovieContainer";
import { Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MoviesContainer from "../containers/MoviesContainer";

const App = () => {
    return (
    <StyledMovieContainer>
        <Route exact path="/" component={MoviesContainer}/>
        <Route exact path="/movies/:id" component={MovieDetails}/>
    </StyledMovieContainer>
    );
}
export default App;