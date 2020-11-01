import styled from "styled-components";

const StyledPoster = styled.img`
  width: ${props => props.theme.posterWidth};
  height: ${props => props.theme.posterHeight};
  border-radius: 4px;
`;

export default StyledPoster;