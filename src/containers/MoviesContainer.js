import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import {getMovies} from '../actions/movieActions';
import { GET_MOVIES } from "../constants/labels";

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => ({
  movies:_.shuffle(_.values(state.movies)),
  loading: state.isLoading[GET_MOVIES]
});

export default connect(
  mapStateToProps,
  {getMovies}
)(MoviesContainer); 