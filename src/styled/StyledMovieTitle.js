import styled from "styled-components";

const StyledMovieTitle = styled.div`
  color: #525661;
  margin-bottom: 4px;
  font-size: 1rem;
  width: ${props => props.theme.posterWidth};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default StyledMovieTitle;