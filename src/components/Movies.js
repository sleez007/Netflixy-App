import React, { useEffect } from "react";
import StyledHeader from "../styled/StyledHeader";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeaderTitle from "../styled/StyledHeaderTitle";
import StyledHorizontalScroll from "../styled/StyledHorizontalScroll";
import Movie from "./Movie";
import StyledFooter from "../styled/StyledFooter";
import StyledLargeBtn from "../styled/StyledLargeBtn";
import StyledLoader from '../styled/StyledLoader';
import StyledMovieLink from "../styled/StyledMovieLink";

const Movies = (props) => {
    useEffect(()=>{
        console.log('hi nn');
        props.getMovies();
    },[]);
    return <>
        <StyledHeader>
            <FontAwesomeIcon icon="bars" text="help" />
            <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
            <FontAwesomeIcon icon="search" />
        </StyledHeader>
        <StyledHorizontalScroll>
            {/* the list of movies */}
            {props.loading
            ? <StyledLoader/>
            : props.movies.map(movie => (
                <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                    <Movie
                        name={movie.name}
                        poster={movie.poster}
                        duration={movie.duration}
                        year={movie.year}
                    />
                </StyledMovieLink>
             ))}
        </StyledHorizontalScroll>
        <StyledFooter>
            <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
        </StyledFooter>
    </>
};

export default Movies;