import React from "react";
import StyledMovie from "../styled/StyledMovie";
import StyledPoster from "../styled/StyledPoster";
import StyledMovieTitle from "../styled/StyledMovieTitle";
import StyledMovieLengthYear from "../styled/StyledMovieLengthYear";

const Movie = ({ poster, name, duration, year }) => (
  <StyledMovie>
    <StyledPoster src={poster} alt={`Movie: ${name}`} />
    <StyledMovieTitle>{name}</StyledMovieTitle>
    <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
  </StyledMovie>
);

export default Movie; 