import React from "react";
import StyledHeader from "../styled/StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderLink from "../styled/StyledHeaderLink";

const MovieDetails = () =>{
    return (
        <StyledHeader>
            <StyledHeaderLink href="/">
                 <FontAwesomeIcon icon="chevron-left" text="Go Back"/>
            </StyledHeaderLink>            
        </StyledHeader>
    )
}

export default MovieDetails;