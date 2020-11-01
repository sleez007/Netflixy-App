import React from "react";
import { Route } from "react-router-dom";
import StyledMovieContainer from "../styled/StyledMovieContainer";
import MoviesContainer from "../containers/MoviesContainer";
import MovieDetails from "./MovieDetails";
import MovieDetailsContainer from "../containers/MovieDetailsContainer";

const App = () => {
  return <StyledMovieContainer>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/movies/:id" component={MovieDetailsContainer} />
  </StyledMovieContainer>;
};

export default App;