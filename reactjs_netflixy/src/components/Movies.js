import React, { Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import Movie from "./Movie";
import StyledHeader from "../styled/StyledHeader";
import StyledHeaderTitle from "../styled/StyledHeaderTitle";
import { movies } from "../staticData";
import StyledHorizontalScroll from "../styled/StyledHorizontalScroll";
import StyledFooter from "../styled/StyledFooter";
import StyledLargeBtn from "../styled/StyledLargeBtn";

const Movies = () => (
    <Fragment>
        <StyledHeader>
            <FontAwesomeIcon icon="bars" text="help" />
            <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
            <FontAwesomeIcon icon="search" />
        </StyledHeader>
        {/* the list of movies */}
        <StyledHorizontalScroll>
            {movies.map(movie => (
                <Movie key={movie.id}
                        name={movie.name}
                        poster={movie.poster}
                        duration={movie.duration}
                        year={movie.year}>

                </Movie>
                    
            ))}
        </StyledHorizontalScroll>
        <StyledFooter>
            <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
        </StyledFooter>
    </Fragment>

)

export default Movies;