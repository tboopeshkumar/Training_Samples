import React, { Component, Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import Movie from "./Movie";
import StyledHeader from "../styled/StyledHeader";
import StyledHeaderTitle from "../styled/StyledHeaderTitle";
//import { movies } from "../staticData";
import StyledHorizontalScroll from "../styled/StyledHorizontalScroll";
import StyledFooter from "../styled/StyledFooter";
import StyledLargeBtn from "../styled/StyledLargeBtn";
import HelpMenuContainer from "../containers/HelpMenuContainer";
import StyledLoader from "../styled/StyledLoader";
import StyledMovieLink from "../styled/StyledMovieLink";

class Movies extends Component {
    componentDidMount() {

        this.props.getMovies();
    }

    render() {

        return (
            <Fragment>
                <StyledHeader>
                    <HelpMenuContainer />
                    <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
                    <FontAwesomeIcon icon="search" />
                </StyledHeader>
                {/* the list of movies */}
                <StyledHorizontalScroll>
                    {this.props.loading
                        ? <StyledLoader />
                        : this.props.movies.map(movie => (
                            <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                                <Movie
                                    name={movie.name}
                                    poster={movie.poster}
                                    duration={movie.duration}
                                    year={movie.year}>

                                </Movie>
                            </StyledMovieLink>

                        ))}
                </StyledHorizontalScroll>
                <StyledFooter>
                    <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
                </StyledFooter>
            </Fragment>
        );
    }
}

export default Movies;